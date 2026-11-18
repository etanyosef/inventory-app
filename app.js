const express = require('express');
const app = express();
const path = require('node:path');
const inventoryRouter = require('./routes/inventoryRouter');
const categoryRouter = require('./routes/categoryRouter');
const brandsRouter = require('./routes/brandsRouter');
const statusRouter = require('./routes/statusRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', inventoryRouter);
app.use('/category', categoryRouter);
app.use('/brand', brandsRouter);
app.use('/status', statusRouter)

app.use((req, res) => {
    res.status(404).render('404', {
        title: '404',
        errorMsg: 'Oops! Page not found.'
    });
});

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Inventory app listening to port ${PORT}`);
});