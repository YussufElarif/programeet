var jwt = require("jsonwebtoken");
var User = require("../models/user");
var hash = require("password-hash");

function loginGet(req, res){
  res.render("login.html", {
    title: "Login"
  });
}

function loginUser(req, res){
  User.findOne({username: req.body.username}, function(err, user){
    if (err) return res.status(400).send(err);
      if (!hash.verify(req.body.password, user.password)) return res.send("incorrect password");

      var token = jwt.sign({data: req.body.username}, 'programeetToken', {expiresIn: 60*60});
      req.session.token = token;
      return res.redirect("/");
  });
}

module.exports = {
  index: loginGet,
  post: loginUser
}

//node-sass -w app/sass/ -o build/c
