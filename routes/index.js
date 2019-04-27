var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/dive', (req, res, next) => {
  res.render('dive');
});

module.exports = router;
