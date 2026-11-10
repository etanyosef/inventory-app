const db = require('../db/queries');

exports.inventoryGet = async (req, res) => {
    const bikes = await db.getAllBikes();
    console.log(bikes);
    res.render('index', {
        title: 'My Bikes',
        bikes,
    });
}

exports.newBikeGet = async (req, res) => {
    const brands = await db.getBrands();
    const category = await db.getCategories();
    const status = await db.getStatus();

    res.render('bikes/new', {
        title: 'Add Bike',
        brands,
        category,
        status,
    });
}

exports.newBikePost = async (req, res) => {
    const { model_name, model_year, color, brand_id, category_id, status_id } = req.body;
    await db.createNewBike(model_name, model_year, color, brand_id, category_id, status_id);
    res.redirect('/');
}

exports.editBikeGet = async (req, res) => {
    const { id } = req.params;
    const bike = await db.getBike(id);
    const brands = await db.getBrands();
    const category = await db.getCategories();
    const status = await db.getStatus();

    console.log(bike[0])

    res.render('bikes/edit', {
        title: 'Bike',
        bike: bike[0],
        brands,
        category,
        status
    });
}

exports.editBikePost = async (req, res) => {
    
}