var MeetUp = require("./meetup.jsx");
var AppDispatcher = require("../../dispatchers/app");
var MeetUpStore = require("../../stores/meetup");

var ACTION_CONSTANT = require("../../constants/action");

var Home = React.createClass({
  componentDidMount: function(){
    AppDispatcher.dispatch({
      action: ACTION_CONSTANT.MEET_UP_LIST_UPDATE
    });
    MeetUpStore.on(ACTION_CONSTANT.MEET_UP_LIST_UPDATE, this.handleAction);
  },
  getInitialState: function(){
    return {
      meetups: MeetUpStore.getList()
    }
  },
  handleAction: function(){
    this.setState({
      meetups: MeetUpStore.getList()
    });
  },
  render: function(){
    return (
      <div className="meetups">
      <h1>Meetup</h1>
      {
        this.state.meetups.map(function(meetup, i){
          return (
            <MeetUp key={i} meetup={meetup} index={i}/>
          )
        }.bind(this))
      }
      </div>
    )
  }
});

module.exports = Home;
