var Header = require("./header/header.jsx");
var Body = require("./body/body.jsx");
var Footer = require("./footer/footer.jsx");


var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
});

module.exports = Main;
