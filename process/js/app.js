var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');


var MapInterface = React.createClass({
    render: function(){
      return(
        <div className="interface">
          <h1>Map</h1>
        </div>
      ) // return
    } //render
}); // MainInterface


ReactDOM.render(
  <MapInterface />,
  document.getElementById('mapInterface')
)
