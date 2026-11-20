const db = require('../db/queries');

exports.statusGet = async (req, res) => {
    const statuses = await db.getAllStatus();
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

exports.statusEditGet = async (req, res) => {
    const { id } = req.params;
    const status = await db.getStatus(id);

    if (!status[0]) {
        return res.status(404).render('404', {
            title: 'Status not found',
            errorMsg: 'This status does not exist',
            linkText: 'Add Status',
            linkBack: '/status',
        });
    }

    res.render('status/edit', {
        title: 'Edit Status',
        status: status[0],
    });
}

exports.statusEditPost = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    await db.updateStatus(id, name);
    res.redirect('/status');
}

exports.statusDeletePost = async (req, res) => {
    const { id } = req.params;
    await db.deleteStatus(id);
    res.redirect('/status');
}