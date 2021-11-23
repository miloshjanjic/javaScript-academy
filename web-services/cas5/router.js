const express = require('express');
const router = express.Router();
const doctorsController = require('./controllers/doctors')

router
      .get('/doctors', doctorsController.fetch)
      .post('/doctors', doctorsController.create)

module.exports = router;