var MeetUpList = require("./meetupList.jsx");

var reactRouter = require("react-router");
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var hashHistory = reactRouter.hashHistory;

var Body = React.createClass({
  render: function(){
    return (
      <main>
      <Router history={hashHistory}>
        <Route path="/" component={MeetUpList}/>
        <Route path="/popular" component={MeetUpList}/>
        <Route path="/new" component={MeetUpList}/>

      </Router>
      </main>
    )
  }
});

module.exports = Body;
