var MeetUp = React.createClass({
  render: function(){
    return (
      <div className="meetup">
        <h2>{this.props.meetup.name}</h2>
        <p>desc: {this.props.meetup.description}</p>
        <p>members: {this.props.meetup.members}</p>
      </div>
    )
  }
});

module.exports = MeetUp;
