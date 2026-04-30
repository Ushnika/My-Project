mod app;
mod config;
mod domain;
mod error;
mod http;
mod infrastructure;
mod services;
mod state;

use sqlx::postgres::PgPoolOptions;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

use crate::{
    app::build_app, config::Config,
    infrastructure::postgres::product_repository::ProductRepository,
    services::product_service::ProductService, state::AppState,
};

#[tokio::main]
async fn main() {
    init_tracing();

    let config = Config::from_env();
    let socket_addr = config.socket_addr();

    let pool = PgPoolOptions::new()
        .max_connections(config.database_max_connections)
        .connect(&config.database_url)
        .await
        .expect("failed to connect to PostgreSQL");

    let product_repository = ProductRepository::new(pool);
    let product_service = ProductService::new(product_repository);
    let state = AppState::new(product_service);
    let app = build_app(state);

    tracing::info!("server listening on http://{}", socket_addr);

    let listener = tokio::net::TcpListener::bind(socket_addr)
        .await
        .expect("failed to bind TCP listener");

    axum::serve(listener, app)
        .await
        .expect("server failed while running");
}

fn init_tracing() {
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "backend=debug,tower_http=info".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();
}
