function logout(req, res, next){
  if (!req.session.token){
    res.status("500").send("Error loggin out");
    next();
  } else {
    req.session.destroy();
    res.redirect("/login");
  }
}

module.exports = {
  post: logout
}
