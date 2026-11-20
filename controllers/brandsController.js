const db = require('../db/queries');

exports.brandsGet = async (req, res) => {
    const brands = await db.getBrands();
    console.log(brands)
    res.render('brands', {
        title: 'Brands',
        brands
    });
}

exports.brandNewGet = (req, res) => {
    res.render('brands/new', {
        title: 'New Brand'
    });
}

exports.brandNewPost = async (req, res) => {
    const { name, description, origin } = req.body;
    await db.createNewBrand(name, description, origin);
    res.redirect('/brand');
}

exports.brandEditGet = async (req, res) => {
    const { id } = req.params;
    const brand = await db.getBrand(id);

    if (!brand[0]) {
        return res.status(404).render('404', {
            title: 'Brand not found',
            errorMsg: 'This brand does not exist.',
            linkText: 'Add Brand',
            linkBack: '/brand',
        });
    }

    res.render('brands/edit', {
        title: 'Edit Brand',
        brand: brand[0],
    });
}

exports.brandEditPost = async (req, res) => {
    const { id } = req.params;
    const { name, description, origin } = req.body;

    await db.updateBrand(id, name, description, origin);
    res.redirect('/brand');
}

exports.brandDeletePost = async (req, res) => {
    const { id } = req.params;
    await db.deleteBrand(id);
    res.redirect('/brand');
}