
const express = require('express');
const router = express.Router();

import ProductController from '../controllers/products.controller';
const productController = new ProductController();


router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/products/:id', productController.getProduct);
