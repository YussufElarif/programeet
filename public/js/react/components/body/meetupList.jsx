var MeetUp = require("./meetup.jsx");
var Loading = require("./loading.jsx");
var DropDownList = require("./dropdownlist.jsx")
var AppDispatcher = require("../../dispatchers/app");
var MeetUpStore = require("../../stores/meetup");

var ACTION_CONSTANT = require("../../constants/action");

var Home = React.createClass({
  componentDidMount: function(){
    AppDispatcher.dispatch({
      action: ACTION_CONSTANT.MEET_UP_LIST_UPDATE,
      type: this.props.location.pathname
    });
    MeetUpStore.on(ACTION_CONSTANT.MEET_UP_LIST_UPDATE, this.handleAction);
  },
  getInitialState: function(){
    return {
      meetups: MeetUpStore.getList(),
      loading: true
    }
  },
  handleAction: function(){
    this.setState({
      meetups: MeetUpStore.getList(),
      loading: false
    });
    console.log(this.state.loading)
  },
  render: function(){
    //Add a sortby list at the top
    return (
      <div className="meetups row">
      <h1>Find your favourite groups</h1>
      <DropDownList/>
      {
        (this.state.loading)? (<Loading/>) : (<div></div>)
      }
      {
        this.state.meetups.map(function(meetup, i){
          return (
            <MeetUp key={i} meetup={meetup} index={i}/>
          )
        })
      }
      </div>
    )
  }
});

module.exports = Home;
