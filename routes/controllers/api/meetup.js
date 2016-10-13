var rest = require("restler");

var key = "2fe4d1b211415804b2b5b5d7f60305e";
var base = "https://api.meetup.com";

function index(req, res){
  var params = "?search=tech&key=" + key;
  var api = "/topics" + params;

  rest.get(base + api).on("complete", function(result){
    return res.json(result)
  }).on("error", function(err){
    return res.status(500).send(err);
  });
}

module.exports = {
  index: index
}
