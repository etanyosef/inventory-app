const pool = require('./pool');

async function getAllBikes() {
    const SQL = `
    SELECT 
        b.bike_id,
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
    ORDER BY model_year DESC
    `;

    const { rows } = await pool.query(SQL);
    return rows;
}

async function getBike(id) {
    const SQL = `
    SELECT 
        *
    FROM bikes AS b
    WHERE b.bike_id = ($1)
    `;

    const { rows } = await pool.query(SQL, [id]);
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

async function updateBike(id, model_name, model_year, color, brand_id, category_id, status_id) {
    const SQL = `
        UPDATE bikes
        SET model_name = ($1),
            model_year = ($2), 
            color = ($3), 
            brand_id = ($4), 
            category_id = ($5), 
            status_id = ($6)
        WHERE bike_id = ($7)
    `;
    await pool.query(SQL, [model_name, model_year, color, brand_id, category_id, status_id, id]);
}

async function deleteBike(id) {
    await pool.query('DELETE FROM bikes WHERE bike_id = ($1)', [id]);
}

async function getBrands() {
    const { rows } = await pool.query('SELECT * FROM brands');
    return rows;
}

async function getBrand(id) {
    const { rows } = await pool.query('SELECT * FROM brands WHERE brand_id = ($1)', [id]);
    return rows;
}

async function createNewBrand(name, description, origin) {
    await pool.query(
        'INSERT INTO brands (name, description, origin) VALUES ($1, $2, $3)',
        [name, description, origin]
    );
}

async function updateBrand(id, name, description, origin) {
    await pool.query(
        `UPDATE brands 
        SET name = ($1),
            description = ($2),
            origin = ($3)
        WHERE brand_id = ($4)`,
        [name, description, origin, id]
    );
}

async function deleteBrand(id) {
    await pool.query('DELETE FROM brands where brand_id = ($1)', [id]);
}

async function getCategories() {
    const { rows } = await pool.query('SELECT * FROM category ORDER BY category_id ASC');
    return rows;
}

async function createNewCategory(name, description) {
    await pool.query(
        'INSERT INTO category (name, description) VALUES ($1, $2)',
        [name, description]
    );
}

async function getCategory(id) {
    const { rows } = await pool.query('SELECT * FROM category WHERE category_id = ($1)', [id]);
    return rows;
}

async function deleteCategory(id) {
    await pool.query('DELETE FROM category WHERE category_id = ($1)', [id]);
}

async function updateCategory(id, name, description) {
    const SQL = `
        UPDATE category
        SET name = ($1),
            description = ($2)
        WHERE category_id = ($3)
    `;
    await pool.query(SQL, [name, description, id]);
}

async function getAllStatus() {
    const { rows } = await pool.query('SELECT * FROM status');
    return rows;
}

async function createNewStatus(status) {
    await pool.query('INSERT INTO status (name) VALUES ($1)', [status]);
}

async function getStatus(id) {
    const { rows } = await pool.query('SELECT * FROM status WHERE status_id = ($1)', [id]);
    return rows;
}

async function updateStatus(id, name) {
    const SQL = `
        UPDATE status
        SET name = ($2)
        WHERE status_id = ($1)
    `;
    await pool.query(SQL, [id, name]);
}

async function deleteStatus(id) {
    await pool.query('DELETE FROM status WHERE status_id = ($1)', [id])
}

module.exports = {
    getAllBikes,
    getBike,
    createNewBike,
    updateBike,
    deleteBike,
    getBrands,
    getBrand,
    createNewBrand,
    updateBrand,
    deleteBrand,
    getCategories,
    createNewCategory,
    getCategory,
    deleteCategory,
    updateCategory,
    getAllStatus,
    createNewStatus,
    getStatus,
    updateStatus,
    deleteStatus,
}