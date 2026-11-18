const { Router } = require('express');
const statusRouter = Router();
const statusController = require('../controllers/statusController');

statusRouter.get('/', statusController.statusGet);

module.exports = statusRouter;