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

module.exports = {
    getAllBikes,
}