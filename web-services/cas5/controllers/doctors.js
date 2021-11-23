const Doctor = require('../models/doctor');

module.exports = {
  fetch: async (req, res) => {
    const doctors = await Doctor.find();

    res.send({
      doctors
    });
  },
  create: async (req, res) => {
    const doctor = await new Doctor(req.body).save();

    res.send({
      doctor
    });
  }
}