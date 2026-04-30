use axum::Json;
use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct HealthResponse {
    message: &'static str,
}

pub async fn check() -> Json<HealthResponse> {
    Json(HealthResponse {
        message: "Backend is running",
    })
}
