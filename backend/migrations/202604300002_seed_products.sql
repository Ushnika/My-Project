INSERT INTO products (id, title, price, description, category, image, rating_rate, rating_count)
VALUES
    (
        1,
        'Demo Backpack',
        109.95,
        'Initial seeded product for local development.',
        'men''s clothing',
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        3.9,
        120
    ),
    (
        2,
        'Demo T-Shirt',
        22.30,
        'Comfort fit cotton t-shirt.',
        'men''s clothing',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        4.1,
        259
    ),
    (
        3,
        'Demo Ring',
        695.00,
        'Classic gold ring with elegant finish.',
        'jewelery',
        'https://fakestoreapi.com/img/71yaJtN4fWL._AC_UL640_QL65_ML3_.jpg',
        4.6,
        400
    ),
    (
        4,
        'Demo SSD Drive',
        114.00,
        'Fast storage for workstations and laptops.',
        'electronics',
        'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        4.8,
        319
    )
ON CONFLICT (id) DO NOTHING;
