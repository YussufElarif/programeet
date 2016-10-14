var rest = require("restler");

var key = "2fe4d1b211415804b2b5b5d7f60305e";
var base = "https://api.meetup.com";

function index(req, res){
  var params = "?category=34&key=" + key;
  var api = "/find/groups" + params;
  //check if exists in database, if not, store in database, return from database
  //use small functions to execute this
  //https://www.pissedconsumer.com/themes/foundation/images/featured_placeholder-400x300.png
  //Store image above within database to reference empty image

  rest.get(base + api).on("complete", function(result){
    return res.json(result)
  }).on("error", function(err){
    return res.status(500).send(err);
  });
}

module.exports = {
  index: index
}
