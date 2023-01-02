var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bogdi', (req, res) => {
  res.send('Bogdi was here!');
})

module.exports = router;
