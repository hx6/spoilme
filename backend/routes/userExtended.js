const express = require('express');
const router = express.Router();
const User = require('../models/Userdata');

router.route('/')
  .post(
    (req, res) => {
      let data = req.body

      let userData = new User({
        firebaseId: data.firebaseId,
        name: data.name,
        friends: [],
      })
      userData.save((err) => {
        if (err) {
          throw err
        }
        res
          .status(201)
          .json(userData.toJSON())
      })

    });

module.exports = router;
