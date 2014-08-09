/** @jsx React.DOM */
$(function() {

  var my_id = chance.guid();

  var peer = new Peer(my_id, {host: 'localhost', port: 9001, path: '/peer_server'});

  peer.on('open', function(id) {
    console.log('I am ' + id);
  });

  // Define what peers are and how to display them...

  var peers = [];
  window.inConns = [];
  window.outConns = [];

  peer.on("connection", function(conn) {
    console.log("Received a connection from " + conn.peer);
    window.inConns = _.union(window.inConns, [connection]);
  });

  var getPeers = function() {
    $.getJSON('connected', function(data){
      var mapped = _.map(data, function(e) {return {id: e, name: "Peer "+e}});
      peers = mapped;
      // Render with updated information
      //React.renderComponent(<PeerList peers={peers}/>, $('#react-wrapper').get(0));
      // Connect to all of them
      window.outConns = _.map(_.filter(peers, function(x) {return x.id!=my_id}), function(e) {
        console.log("Connecting to " + e.id);
        peer.connect(e.id);
      });
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

  window.numBalls=1;

  // Load and re-render every 2 seconds...
  getPeers();
  window.setInterval(function(){
    getPeers();
    window.numBalls = 1+_.size(_.uniq(_.union(window.inConns, window.outConns)));
    console.log(window.numBalls);
  }, 500);
});
