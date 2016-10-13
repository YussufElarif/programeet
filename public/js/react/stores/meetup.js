var merge = require("merge");
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app");
var ACTION_CONSTANT = require("../constants/action");

var _meetups = [];

var MeetUps = merge(EventEmitter.prototype, {
  getList: function(api, key){
    return _meetups;
  }
});

module.exports = MeetUps;

AppDispatcher.register(handleAction);

function handleAction(payload){
  if (payload.action === ACTION_CONSTANT.MEET_UP_LIST_UPDATE){
    updateList();
  }
}

function updateList(){
  axios.get("/api/meetup").then(function(res){
    _meetups = res.data.results;
    console.log(_meetups);
    console.log(res);
    MeetUps.emit(ACTION_CONSTANT.MEET_UP_LIST_UPDATE);
  });
}
