# Backend API

This is Rust API service built with Axum + PostgreSQL.

## Folder Structure

- `src/main.rs`: bootstrap, dependency wiring, server startup
- `src/app.rs`: app-level middleware and router composition
- `src/config.rs`: environment-based configuration
- `src/state.rs`: shared application state
- `src/error.rs`: unified API error model and HTTP mapping
- `src/domain/`: domain models (`Product`, `Rating`)
- `src/infrastructure/postgres/`: database repository layer
- `src/services/`: business logic and validation
- `src/http/`: handlers and route registration
- `migrations/`: SQL schema and seed data

## API Endpoints

- `GET /health`
- `GET /products?sort=asc|desc`
- `GET /products/categories`
- `GET /products/{id}`



1. Apply migrations

Run SQL files in `migrations/` using your preferred tool (`psql`, DBeaver, pgAdmin, or migration runner).

2. Start backend

```bash
cargo run
```

Server default: `http://127.0.0.1:8080`
