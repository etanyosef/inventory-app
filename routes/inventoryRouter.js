const { Router } = require('express');
const inventoryRouter = Router();
const inventoryController = require('../controllers/inventoryController');

inventoryRouter.get('/', inventoryController.inventoryGet);
inventoryRouter.get('/bikes/new', inventoryController.newBikeGet);
inventoryRouter.post('/bikes/new', inventoryController.newBikePost);

module.exports = inventoryRouter;