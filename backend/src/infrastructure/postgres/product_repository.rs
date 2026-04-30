use sqlx::{FromRow, PgPool};

use crate::{
    domain::product::{Product, Rating},
    error::AppError,
    services::product_service::SortOrder,
};

#[derive(Clone)]
pub struct ProductRepository {
    pool: PgPool,
}

impl ProductRepository {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn list_products(&self, sort: Option<SortOrder>) -> Result<Vec<Product>, AppError> {
        let order_by = match sort {
            Some(SortOrder::Desc) => "DESC",
            _ => "ASC",
        };

        let query = format!(
            "SELECT id, title, price, description, category, image, rating_rate, rating_count FROM products ORDER BY id {}",
            order_by
        );

        let rows = sqlx::query_as::<_, ProductRow>(&query)
            .fetch_all(&self.pool)
            .await
            .map_err(map_sqlx_error)?;

        Ok(rows.into_iter().map(Into::into).collect())
    }

    pub async fn list_categories(&self) -> Result<Vec<String>, AppError> {
        sqlx::query_scalar::<_, String>(
            "SELECT DISTINCT category FROM products ORDER BY category ASC",
        )
        .fetch_all(&self.pool)
        .await
        .map_err(map_sqlx_error)
    }

    pub async fn get_product_by_id(&self, id: u32) -> Result<Product, AppError> {
        let row = sqlx::query_as::<_, ProductRow>(
            "SELECT id, title, price, description, category, image, rating_rate, rating_count FROM products WHERE id = $1",
        )
        .bind(i32::try_from(id).map_err(|_| AppError::BadRequest("Invalid product id".to_string()))?)
        .fetch_optional(&self.pool)
        .await
        .map_err(map_sqlx_error)?;

        row.map(Into::into)
            .ok_or_else(|| AppError::NotFound("Resource not found".to_string()))
    }
}

#[derive(Debug, FromRow)]
struct ProductRow {
    id: i32,
    title: String,
    price: f64,
    description: String,
    category: String,
    image: String,
    rating_rate: f64,
    rating_count: i32,
}

impl From<ProductRow> for Product {
    fn from(row: ProductRow) -> Self {
        Self {
            id: row.id.max(0) as u32,
            title: row.title,
            price: row.price,
            description: row.description,
            category: row.category,
            image: row.image,
            rating: Rating {
                rate: row.rating_rate,
                count: row.rating_count.max(0) as u32,
            },
        }
    }
}

fn map_sqlx_error(error: sqlx::Error) -> AppError {
    AppError::Database(format!("Database operation failed: {error}"))
}
