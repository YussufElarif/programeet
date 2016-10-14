var merge = require("merge");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _favourite = [];

var Favourite = merge(EventEmitter.prototype, {
  getList: function(api, key){
    return _favourite;
  }
});

module.exports = Favourite;

AppDispatcher.register(handleAction);

function handleAction(payload){
  console.log(payload);
  if (payload.action === ACTION_CONSTANT.FAVOURITE.POST){
    addToFavourite(payload.meetupId);
  }
}

function addToFavourite(meetup){
  axios.post("/api/favourite", {
    meetupId: meetup,
    test: "test",
    hello: "teststestse"
  }).then(function(res){
    console.log(res);
    MeetUps.emit(ACTION_CONSTANT.FAVOURITE.POST);
  }).catch(function(err){
    console.log(err);
  });
}
