/** @jsx React.DOM */
$(function() {

  var peer = new Peer(chance.guid(), {host: 'localhost', port: 9001, path: '/peer_server'});

  peer.on('open', function(id) {
    console.log('I am ' + id);
  });

  // Define what peers are and how to display them...

  var peers = [];

  var getPeers = function() {
    $.getJSON('connected', function(data){
      var mapped = _.map(data, function(e) {return {id: e, name: "Peer "+e}});
      peers = _.union(peers, mapped);
      // Render with updated information
      React.renderComponent(<PeerList peers={peers}/>, $('#react-wrapper').get(0));
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

  // Load and refresh peer list every 2 seconds...

  getPeers();
  window.setInterval(function(){
    getPeers();
  }, 2000);
});
