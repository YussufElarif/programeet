var reactRouter = require("react-router");

var Header = React.createClass({
  handleLogout: function(e){
    e.preventDefault();
    axios.post("/logout").then(function(data){
      location.href = "/login";
    });
  },
  render: function(){
    return (
      <header className="navbar-fixed">
        <div className="row">
          <nav className="nav-wrapper amber darken-4">
            <div className="col s12">
              <a href="/#" className="brand-logo">Programeet</a>
              <a href="#" data-activates="navigation" className="button-collapse"><i className="material-icons">menu</i></a>

              <ul className="right hide-on-med-and-down">
                <li><a href="/#">Home</a></li>
                <li><a className="waves-effect waves-light btn" onClick={this.handleLogout}>Logout</a></li>
              </ul>

              <ul className="side-nav center" id="navigation">
                <li><a href="/#">Home</a></li>
                <li><a className="waves-effect waves-light btn" onClick={this.handleLogout}>Logout</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
});

module.exports = Header;
