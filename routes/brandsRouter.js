const { Router } = require('express');
const brandsRouter = Router();
const brandsController = require('../controllers/brandsController');

brandsRouter.get('/', brandsController.brandsGet);
brandsRouter.get('/new', brandsController.brandNewGet);
brandsRouter.post('/new', brandsController.brandNewPost);
brandsRouter.get('/edit/:id', brandsController.brandEditGet);

module.exports = brandsRouter;