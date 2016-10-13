var express = require('express');
var app = express();
var router = express.Router();
var validation = require("./controllers/validation");
var web = require("./controllers/index");
var login = require("./controllers/login");
var logout = require("./controllers/logout");
var register = require("./controllers/register");
//API
var meetup = require("./controllers/api/meetup");

router.route('/login')
      .get(login.index)
      .post(login.post);

router.route('/register')
      .get(register.index)
      .post(register.create);

//app.use(validation.auth);

router.route('/')
      .get(validation.auth, web.index);

router.route('/logout')
      .post(logout.post);

router.route('/api/meetup')
      .get(validation.auth, meetup.index);

module.exports = router;
