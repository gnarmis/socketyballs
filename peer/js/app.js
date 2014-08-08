'use strict';

var peer = new Peer(chance.guid(), {host: 'localhost', port: 9001, path: '/peer_server'});

peer.on('open', function(id) {
  console.log('I am ' + id);
});

