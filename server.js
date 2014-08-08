// Used to facilitate peer to peer comm
var PeerServer = require('peer').PeerServer;
// Traditional web app
var express = require('express');
var peer_central = express();


// Help peers find each other
var peer_server = new PeerServer({port: 9001, path: '/peer_server'});

peer_central.get('/connected', function (req, res) {
  return res.json(Object.keys(peer_server._clients.peerjs));
});

// serve out the peer files
peer_central.use(express.static(__dirname + '/peer'));

peer_central.listen(3000, function() {
    console.log('Listening on port %d', 3000);
});

