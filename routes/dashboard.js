const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.params.token)
  res.render('partials/Dashboard/admin-panel')
});

module.exports = router;
