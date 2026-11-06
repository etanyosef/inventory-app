const express = require('express');
const app = express();
const path = require('node:path');
const inventoryRouter = require('./routes/inventoryRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', inventoryRouter);

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