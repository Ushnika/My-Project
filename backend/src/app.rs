use axum::Router;
use tower_http::{cors::CorsLayer, trace::TraceLayer};

use crate::{http::routes::create_router, state::AppState};

pub fn build_app(state: AppState) -> Router {
    create_router(state)
        .layer(TraceLayer::new_for_http())
        .layer(CorsLayer::permissive())
}
