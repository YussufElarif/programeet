var MeetUpList = require("./meetupList.jsx");

var reactRouter = require("react-router");
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var hashHistory = reactRouter.hashHistory;

var Body = React.createClass({
  render: function(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MeetUpList}/>
      </Router>
    )
  }
});

module.exports = Body;
