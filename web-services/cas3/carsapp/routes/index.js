var express = require('express');
var router = express.Router();
const carsController = require('../controllers/cars')

router
      .get('/', carsController.fetch)
      .post('/cars', carsController.create)
      .put('/cars/:_id', carsController.put)
      .patch('/cars/:_id', carsController.patch)
      .delete('/cars/:_id', carsController.delete)

module.exports = router;