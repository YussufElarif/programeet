var reactRouter = require("react-router");
var Link = reactRouter.Link;

var Header = React.createClass({
  render: function(){
    return (
      <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/login">Login</a></li>
      </ul>
    )
  }
});

module.exports = Header;
