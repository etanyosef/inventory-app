const db = require('../db/queries');

exports.inventoryGet = async (req, res) => {
    const bikes = await db.getAllBikes();
    console.log(bikes);
    res.render('index', {
        title: 'My Bikes',
        bikes,
    });
}