use axum::{Router, routing::get};

use crate::{
    http::handlers::{health, products},
    state::AppState,
};

pub fn create_router(state: AppState) -> Router {
    Router::new()
        .route("/health", get(health::check))
        .route("/products", get(products::list_products))
        .route("/products/categories", get(products::list_categories))
        .route("/products/{id}", get(products::get_single_product))
        .with_state(state)
}
