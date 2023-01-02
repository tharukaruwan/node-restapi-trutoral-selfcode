const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.patch('/:id', productController.editProduct);
router.delete('/:id', productController.removeProduct);

module.exports = router;