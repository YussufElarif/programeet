var React = require("react");

var Login = React.createClass({
  getInitialState: function(){
    return {
      username: "",
      password: ""
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.state);
  },
  handleChange: function(e){
      this.setState({
        username: (e.target.name == "username")? e.target.value: this.state.username,
        password: (e.target.name == "password")? e.target.value: this.state.password
      });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>
        <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
});

module.exports = Login;
