use axum::{
    Json,
    extract::{Path, Query, State},
};
use serde::Deserialize;

use crate::{
    domain::product::Product, error::AppError, services::product_service::parse_sort_order,
    state::AppState,
};

#[derive(Debug, Deserialize)]
pub struct ProductQuery {
    sort: Option<String>,
}

pub async fn list_products(
    State(state): State<AppState>,
    Query(query): Query<ProductQuery>,
) -> Result<Json<Vec<Product>>, AppError> {
    let sort_order = parse_sort_order(query.sort.as_deref())?;
    let products = state.product_service.list_products(sort_order).await?;

    Ok(Json(products))
}

pub async fn list_categories(State(state): State<AppState>) -> Result<Json<Vec<String>>, AppError> {
    let categories = state.product_service.list_categories().await?;
    Ok(Json(categories))
}

pub async fn get_single_product(
    State(state): State<AppState>,
    Path(id): Path<u32>,
) -> Result<Json<Product>, AppError> {
    let product = state.product_service.get_product_by_id(id).await?;
    Ok(Json(product))
}
