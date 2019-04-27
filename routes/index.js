var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/dive', (req, res, next) => {
  res.render('dive');
});

router.get('/para', (req, res, next) => {
  res.render('para');
});

router.get('/selffly', (req, res, next) => {
  res.render('selffly');
});

router.get('/hunt', (req, res, next) => {
  res.render('hunt');
});

router.get('/fish', (req, res, next) => {
  res.render('fish');
});

router.get('/waterdive', (req, res, next) => {
  res.render('waterdive');
});

router.get('/taobao', (req, res, next) => {
  res.render('taobao');
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

module.exports = router;
