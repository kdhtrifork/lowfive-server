var app = require('express')();
var server = require('http').Server(app);
var bodyParser = require('body-parser')
var io = require('socket.io')(server);
var Store = require('./Store');
var snippetsAPI = require('./snippets/api');

server.listen(3000);

var snippets = [];

var sockets = [];

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json(sockets.length);
});

app.use('/snippets', snippetsAPI);

io.on('connection', function(socket){
  sockets.push(socket);

  socket.on('create-snippet', function(snippet){
    Store.save(snippet);
    // Make react-app load new snippets
    io.sockets.emit('new-snippet');
  });

  socket.on('disconnect', function(){
    console.log('Cya !');
  });
});
