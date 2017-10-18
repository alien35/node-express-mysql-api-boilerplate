var express = require('express');
var router = express.Router();
var authorsController = require('../controllers/authors-controller');
var notFoundController = require('../controllers/not-found-controller');

router.get('/authors', authorsController.all);
router.post('/authors', authorsController.create);
router.get('/author/:id', authorsController.get);
router.post('/author/:id', authorsController.update);
router.delete('/author/:id', authorsController.destroy);

router.get('*', notFoundController.show);

module.exports = router;
