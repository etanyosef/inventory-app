const { Router } = require('express');
const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/', categoryController.categoryGet);
categoryRouter.get('/new', categoryController.categoryNewGet);
categoryRouter.post('/new', categoryController.categoryNewPost);
categoryRouter.post('/delete/:id', categoryController.categoryDeletePost);
categoryRouter.get('/edit/:id', categoryController.categoryEditGet);

module.exports = categoryRouter;