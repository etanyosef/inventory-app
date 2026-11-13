const { Router } = require('express');
const inventoryRouter = Router();
const inventoryController = require('../controllers/inventoryController');

inventoryRouter.get('/', inventoryController.inventoryGet);
inventoryRouter.get('/bikes/new', inventoryController.newBikeGet);
inventoryRouter.post('/bikes/new', inventoryController.newBikePost);
inventoryRouter.get('/bike/edit/:id', inventoryController.editBikeGet);
inventoryRouter.post('/bike/edit/:id', inventoryController.editBikePost);
inventoryRouter.post('/bike/delete/:id', inventoryController.deleteBikePost);

module.exports = inventoryRouter;