/** @jsx React.DOM */
$(function() {
  var socket = io();

  // Define what peers are and how to display them...

  var peers = [];

  var getPeers = function() {
    $.getJSON('connected', function(data){
      var mapped = _.map(data, function(e) {return {id: e, name: "Peer "+e}});
      peers = mapped;
      // Render with updated information
      //React.renderComponent(<PeerList peers={peers}/>, $('#react-wrapper').get(0));
    });
  };

  /* React Components */

  var PeerList  = React.createClass({
    render: function() {
      var peers = this.props.peers;
      return (
      <ul>
        {peers.map(function(peer) {
          return <li key={peer.id}>{peer.name}</li>;
        })}
      </ul>
      );
    }
  });

  // Ball Handling...

  window.numBalls=0;

  // Load and re-render every 2 seconds...
  getPeers();
  window.setInterval(function(){
    window.numBalls = _.size(peers)
    getPeers();
  }, 200);
});
