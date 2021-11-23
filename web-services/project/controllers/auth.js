const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  register: async (req, res) => {
    try {
      //! proverka na dali ne se sovpagjaat lozinkite, EARLY EXIT
      if (!req.body.password || req.body.password != req.body.confirmation_password) {
        return res.status(400).send({
          error: true,
          message: 'Bad request. Passwords do not match.'
        });
      }

      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).send({
          error: true,
          message: 'Bad request. User exists with the provided email.'
        });
      }

      req.body.password = bcrypt.hashSync(req.body.password);

      await User.create(req.body);

      res.status(201).send({
        error: false,
        message: 'User registered!' //! naiven pristap: proverka dali lozinkite se sovpagjaat
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: error.message
      });
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).send({
          error: true,
          message: 'No user with the provided email'
        });
      }

      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).send({
          error: true,
          message: 'Incorrect password'
        });
      }

      const payload = {
        id: user.id,
        email: user.email
      }

      const token = jwt.sign(payload, 'secret_key', {
        expiresIn: '30m'
      });

      res.send({
        error: false,
        message: 'JWT successfully generated',
        token: token
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: error.message
      });
    }
  },
  refresh_token: (req, res) => {
    const payload = {
      id: req.user.id,
      email: req.user.email
    };

    const token = jwt.sign(payload, 'secret_key', {
      expiresIn: '30m'
    });

    res.status(200).send({
      error: false,
      message: 'JWT successfully refreshed',
      token
    })
  }
};

// users: async (req, res) => {
//   try {
//     const userAll = await User.find();
//     res.send({
//       userAll
//     });
//   } catch (error) {
//     res.status(404).send({
//       error: true,
//       message: error.message
//     });
//   }
// },
// user: async (req, res) => {
//   try {
//     const userOne = await User.findById(req.params.id);
//     res.send({
//       userOne
//     })

//   } catch (error) {
//     res.status(404).send({
//       error: true,
//       message: error.message
//     });
//   }
// }