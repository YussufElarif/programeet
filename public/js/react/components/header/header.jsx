var reactRouter = require("react-router");

var Header = React.createClass({
  render: function(){
    return (
      <ul>
        <li><a href="#/">Home</a></li>
        <li><form action="/logout" method="POST"><input type="submit" value="logout"/></form></li>
      </ul>
    )
  }
});

module.exports = Header;
