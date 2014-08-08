# p2p^2

Double or nothing! A p2p game all about powers of 2.

## Architecture

There's `peer`, which is simply some html that can be hosted and served from
anywhere (as long as the PeerServer information is correctly setup). The
PeerServer it connects to is `localhost:9001`.

Also, there's `peer_server`, which helps peers connect with each other. It
also provides a JSON API at `localhost:3000/connected`, returning the
collection of all connected peers in one array.

To start both the `:3000` and `:9001` servers, you just do
`node peer_server/server.js`.
