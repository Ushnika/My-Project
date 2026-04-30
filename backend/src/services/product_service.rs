use crate::{
    domain::product::Product, error::AppError,
    infrastructure::postgres::product_repository::ProductRepository,
};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SortOrder {
    Asc,
    Desc,
}

#[derive(Clone)]
pub struct ProductService {
    repository: ProductRepository,
}

impl ProductService {
    pub fn new(repository: ProductRepository) -> Self {
        Self { repository }
    }

    pub async fn list_products(&self, sort: Option<SortOrder>) -> Result<Vec<Product>, AppError> {
        self.repository.list_products(sort).await
    }

    pub async fn list_categories(&self) -> Result<Vec<String>, AppError> {
        self.repository.list_categories().await
    }

    pub async fn get_product_by_id(&self, id: u32) -> Result<Product, AppError> {
        self.repository.get_product_by_id(id).await
    }
}

pub fn parse_sort_order(raw_sort: Option<&str>) -> Result<Option<SortOrder>, AppError> {
    match raw_sort {
        None => Ok(None),
        Some("asc") => Ok(Some(SortOrder::Asc)),
        Some("desc") => Ok(Some(SortOrder::Desc)),
        Some(value) => Err(AppError::BadRequest(format!(
            "Invalid sort '{value}'. Allowed values: asc, desc"
        ))),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parse_sort_order_accepts_supported_values() {
        assert_eq!(parse_sort_order(Some("asc")).unwrap(), Some(SortOrder::Asc));
        assert_eq!(
            parse_sort_order(Some("desc")).unwrap(),
            Some(SortOrder::Desc)
        );
        assert_eq!(parse_sort_order(None).unwrap(), None);
    }

    #[test]
    fn parse_sort_order_rejects_unknown_values() {
        assert!(parse_sort_order(Some("newest")).is_err());
    }
}
