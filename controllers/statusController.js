const db = require('../db/queries');

exports.statusGet = async (req, res) => {
    const statuses = await db.getStatus();
    res.render('status', {
        title: 'Status',
        statuses
    });
}