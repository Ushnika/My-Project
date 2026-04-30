use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Product {
    pub id: u32,
    pub title: String,
    pub price: f64,
    pub description: String,
    pub category: String,
    pub image: String,
    pub rating: Rating,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Rating {
    pub rate: f64,
    pub count: u32,
}
