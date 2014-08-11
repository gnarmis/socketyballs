# SocketyBalls

An quick experiment with Paper.js and Socket.io. The number of balls
corresponds to number of active socket connections.

Seems like a simple enough base for all kind of multiplayer game dev
experiments?

[Demo](http://socketyballs.herokuapp.com)

You can fork, tweak, and deploy to Heroku with:

- `git clone your-fork's-remote`
- `heroku create your-fork`
- `git push heroku master`

## Notes

* I tried out FB's React.js to make a component representing a dynamic list of
  connected clients, although I'm no longer rendering that component. It ended
  up being ridiculously easy though; I like React so far.

* I also tried out Peer.js, but it was meant for 1-to-1 connections only and I
  wanted multiple interconnected clients, using a solid library, which meant
  Socket.io by a long shot.

* Paper.js looks pretty simple. I did just grab a chunk of example code and
  tweak it, but reading through `balls.js` you can see that it's fairly
  simple.

* Node and Socket.io are awesome! And heroku enables websockets by default now!
