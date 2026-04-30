use crate::services::product_service::ProductService;

#[derive(Clone)]
pub struct AppState {
    pub product_service: ProductService,
}

impl AppState {
    pub fn new(product_service: ProductService) -> Self {
        Self { product_service }
    }
}
