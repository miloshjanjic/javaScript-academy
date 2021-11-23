const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');

app.use(express.json()); //! prikacuvanje na JSON parser Middleware(posrednicka f-ja)

mongoose.connect(
  'mongodb://localhost:27017/doctorsdb',
  { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', router);
//! se koristi koga imame vo URL enkodirano podatoci,za da parsirame Form-data

module.exports = app;

// const doctors = [
//   {
//     name: "Zan",
//     surname: "Mitrev",
//     birthDate: 1978,
//     special: "heart"
//   },
//   {
//     name: "Milosh",
//     surname: "Janjic",
//     birthDate: 1993,
//     special: "bone"
//   },
//   {
//     name: "Stefan",
//     surname: "Stojanov",
//     birthDate: 1990,
//     special: "eye"
//   }
// ];

// app.get('/doctors', (req, res) => {
//   console.log(req.query);
//   if (req.query.special) {
//     res.send(doctors.filter((doctor) => doctor.special < req.query.special))
//   }
//   else {
//     res.send(doctors)
//   }
// });
// app.post('/doctors', async (req, res) => {
//   try {
//     const doctor = new Doctor({ ...req.body, _id: new mongoose.Types.ObjectId() });
//     await doctor.save();

//     res.send({
//       message: 'New doctor created',
//       doctor: req.body
//     });
//   } catch (err) {
//     res.send({
//       message: `Error: ${err.message}`
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log('App is runingn on port 3000 !!');
// });