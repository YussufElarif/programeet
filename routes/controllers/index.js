var path = require("path");

function getIndex(req, res){
  //res.sendFile(path.resolve('./public/index.html'));
  res.render("index.html");

}

module.exports = {
  index: getIndex
}
