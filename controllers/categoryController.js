const db = require('../db/queries');

exports.categoryGet = async (req, res) => {
    const categories = await db.getCategories();
    console.log(categories)
    res.render('category', {
        title: 'Categories',
        categories
    });
}

exports.categoryNewGet = async (req, res) => {
    res.render('category/new', {
        title: 'New Category',
    });
}

exports.categoryNewPost = async (req, res) => {
    const { name, description } = req.body;
    await db.createNewCategory(name, description);
    res.redirect('/category');
}

exports.categoryDeletePost = async (req, res) => {
    const { id } = req.params;
    await db.deleteCategory(id);
    res.redirect('/category');
}

exports.categoryEditGet = async (req, res) => {
    const { id } = req.params;
    const category = await db.getCategory(id);
    
    if (!category[0]) {
        return res.status(404).render('404', {
            title: '404',
            errorMsg: 'Category not found'
        })
    }

    res.render('category/edit', {
        title: 'Edit Category',
        category: category[0],
    })
}

exports.categoryEditPost = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    await db.updateCategory(id, name, description);
    res.redirect('/category');
}