var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('this is a test').status(200);
});

router.post('/', function(req, res, next) {
  args = req.body;
  console.log(args);
  response = "Hello " + args.user_name + "! You posted from " + args.channel_name;
  res.json({'text': response});
});

module.exports = router;
