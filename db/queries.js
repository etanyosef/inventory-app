const pool = require('./pool');

async function getAllBikes() {
    const SQL = `
    SELECT 
        b.model_name,
        b.model_year,
        b.color,
        brands.name AS brand,
        cat.name AS category,
        status.name AS status
    FROM bikes AS b
    JOIN brands
    ON b.brand_id = brands.brand_id
    JOIN category AS cat
    ON b.category_id = cat.category_id
    JOIN status
    ON b.status_id = status.status_id
    `;

    const { rows } = await pool.query(SQL);
    return rows;
}

async function createNewBike(model_name, model_year, color, brand_id, category_id, status_id) {
    const SQL = `
        INSERT INTO bikes (model_name, model_year, color, brand_id, category_id, status_id)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;
    await pool.query(SQL, [model_name, model_year, color, brand_id, category_id, status_id]
    );
}

async function getBrands() {
    const { rows } = await pool.query('SELECT brand_id, name FROM brands');
    return rows;
}

async function getCategories() {
    const { rows } = await pool.query('SELECT category_id, name FROM category');
    return rows;
}

async function getStatus() {
    const { rows } = await pool.query('SELECT * FROM status');
    return rows;
}

module.exports = {
    getAllBikes,
    createNewBike,
    getBrands,
    getCategories,
    getStatus,
}