const { Router } = require('express');
const statusRouter = Router();
const statusController = require('../controllers/statusController');

statusRouter.get('/', statusController.statusGet);
statusRouter.get('/new', statusController.statusNewGet);
statusRouter.post('/new', statusController.statusNewPost);

module.exports = statusRouter;