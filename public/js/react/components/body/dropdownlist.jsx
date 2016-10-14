var DropDownList = React.createClass({
  handleChange: function(e){
    console.log(e);
  },
  render: function(){
    return (
      <div className="sortby-dropdown">
        <a className='dropdown-button btn' href='#' data-activates='sortby-dropdown'>Sort By<i className="material-icons">expand_more</i></a>

        <ul id='sortby-dropdown' className='dropdown-content'>
          <li><a href="/#/popular">popular</a></li>
          <li><a href="/#/new">new</a></li>
        </ul>
      </div>
    )
  }
});

//<li className="divider"></li>

module.exports = DropDownList;
