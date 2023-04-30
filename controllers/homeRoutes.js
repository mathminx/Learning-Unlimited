const router = require('express').Router();
const {User} = require("../model");

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('./layouts/main');
});

module.exports = router;
