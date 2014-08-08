'use strict';

var peer = new Peer(chance.guid(), {host: 'localhost', port: 9001, path: '/peer_server'});

peer.on('open', function(id) {
  console.log('I am ' + id);
});

var Peers = [];

var getPeers = function() {
  $.getJSON('connected', function(data){
    return Peers = _.union(Peers, data);
  })
};

getPeers();
