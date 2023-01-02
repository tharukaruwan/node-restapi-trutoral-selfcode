const { getProducts, getProduct, editProduct, deleteProduct, createProduct } = require("../service/product.service");

exports.createProduct = (req, res, next) => {
    const product = createProduct({ id: req.body.id, name: req.body.name });
    return res.status(200).json(product);
}

exports.editProduct = (req, res, next) => {
    const product = editProduct({ id: req.params.id, name: req.body.name })
    return res.status(200 ).json(product);
}

exports.getProducts = (req, res, next) => {
    const productList = getProducts();
    return res.status(200).json(productList);
}

exports.getProduct = (req, res, next) => {
    const product = getProduct({  id: req.params.id });
    return res.status(product.length ? 200 : 400).json(product.length ? product[0] : { error: "not fount"});
}

exports.removeProduct = (req, res, next) => {
    const product = deleteProduct({ id: req.params.id });
    return res.status(product ? 200 : 400).json();
}

