var express = require('express');
var app = express();
var router = express.Router();

var users = require("./controllers/login");
var validation = require("./controllers/validation");

app.use(validation.auth);

router.route('/login')
      .get(users.index)
      .post(users.login);

app.use(validation.api);

router.route('/')

module.exports = router;
