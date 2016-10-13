var MeetUp = React.createClass({
  render: function(){
    return (
      <div className="meetup card padding">
        <h1 className="card-title">{this.props.meetup.name}</h1>
        <p><strong>City: </strong>{this.props.meetup.city}</p>
        <div><strong>Description: </strong><p dangerouslySetInnerHTML={{__html: this.props.meetup.description}}></p></div>
        <p><strong>Members: </strong>{this.props.meetup.members}</p>
      </div>
    )
  }
});

module.exports = MeetUp;
