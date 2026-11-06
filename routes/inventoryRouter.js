const { Router } = require('express');
const inventoryRouter = Router();
const inventoryController = require('../controllers/inventoryController');

inventoryRouter.get('/', inventoryController.inventoryGet);

module.exports = inventoryRouter;