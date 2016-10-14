var AppDispatcher = require("../../dispatchers/app");
var Favourite = require("../../stores/favourite");
var ACTION_CONSTANT = require("../../constants/action");

var MeetUp = React.createClass({
  handleFavourite: function(){
    //save the favourites in the database
    //create a new route and page to find all favourites
    console.log("dispatch");
    AppDispatcher.dispatch({
      action: ACTION_CONSTANT.FAVOURITE.POST,
      meetup: this.props.meetup.id
    });
  },
  render: function(){
    var img = (this.props.meetup.group_photo)?this.props.meetup.group_photo.highres_link: "#";
    return (
      <section className="meetup card col s3">
        <div className="card-image">
          <div style={{backgroundImage: "url(" + img + ")"}}></div>
        </div>
        <div className="card-content">
          <h1 className="card-title">{this.props.meetup.name}</h1>
          <p><strong>City: </strong>{this.props.meetup.city}</p>
          <p><strong>Members: </strong>{this.props.meetup.members}</p>
        </div>
        <div className="card-action">
          <a className="btn tooltipped amber darken-4" data-position="top" data-delay="50" data-tooltip="Favourite" onClick={this.handleFavourite}><i className="material-icons">star</i></a>
        </div>
      </section>
    )
  }
});

module.exports = MeetUp;
