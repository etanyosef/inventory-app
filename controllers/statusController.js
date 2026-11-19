const db = require('../db/queries');

exports.statusGet = async (req, res) => {
    const statuses = await db.getStatus();
    res.render('status', {
        title: 'Status',
        statuses
    });
}

exports.statusNewGet = (req, res) => {
    res.render('status/new', {
        title: 'New Status'
    });
}

exports.statusNewPost = async (req, res) => {
    const { status } = req.body;
    await db.createNewStatus(status);
    res.redirect('/status');
}