var rest = require("restler");
var Favourite = require("../../models/favourite");

function create(req, res){
  //check if exists in database, if not, store in database, return from database
  //use small functions to execute this
  //https://www.pissedconsumer.com/themes/foundation/images/featured_placeholder-400x300.png
  //Store image above within database to reference empty image
  console.log("body ", req.body);
  Favourite.create({meetupId: req.body.meetupId, userId: req.user}, function(err, favourite){
    console.log(err);
    if (err) return res.status(500).send(err);
    console.log(favourite);
  });
}

module.exports = {
  create: create
}
