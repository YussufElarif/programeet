var mongoose = require('mongoose');

var FavouriteSchema = new mongoose.Schema({
  meetupId : {type: String, required:true, unique: true},
  userId : [{type: mongoose.Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Favourite' , FavouriteSchema);
