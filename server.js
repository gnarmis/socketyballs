// Traditional web app
var express = require('express');
var app = express();
var http = require('http').Server(app);
// Socket.io magic
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

app.use(express.static(__dirname + '/socket'));

// root
app.get('/', function(req, res){
  res.sendfile('socket/index.html');
});

// connected clients
app.get('/connected', function (req, res) {
  return res.json(Object.keys(io.of('/').connected))
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
