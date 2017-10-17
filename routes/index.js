var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products-controller');
var notFoundController = require('../controllers/not-found-controller');

router.get('/products', productsController.all);
router.post('/products', productsController.create);
router.get('/product/:id', productsController.get);
router.post('/product/:id', productsController.update);
router.delete('/product/:id', productsController.destroy);

router.get('*', notFoundController.show);

module.exports = router;
