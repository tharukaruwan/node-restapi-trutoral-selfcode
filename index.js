const express = require('express');
const cors = require('cors');
const helthRouter = require('./src/router/helth.router');
const productRouter = require('./src/router/product.router');

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const options = { origin: "*" };

app.use(cors(options));
app.use(express.json());

app.listen(port, async () => {
    console.log(`Server listening at http://${host}:${port}`);
});

app.use('/helthcheck', helthRouter);
app.use('/products', productRouter);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
        error: {
            message: error.message
        }
    });
});