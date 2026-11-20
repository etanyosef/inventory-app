const { Router } = require('express');
const statusRouter = Router();
const statusController = require('../controllers/statusController');

statusRouter.get('/', statusController.statusGet);
statusRouter.get('/new', statusController.statusNewGet);
statusRouter.post('/new', statusController.statusNewPost);
statusRouter.get('/edit/:id', statusController.statusEditGet);
statusRouter.post('/edit/:id', statusController.statusEditPost);
statusRouter.post('/delete/:id', statusController.statusDeletePost);

module.exports = statusRouter;