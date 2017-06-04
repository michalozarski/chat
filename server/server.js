const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  console.log(`users connected: ${io.engine.clientsCount}`);

  socket.on('disconnect', () => {
    console.log('user disconnected');
    console.log(`users connected: ${io.engine.clientsCount}`);
  })
});

server.listen(port, () =>  {
  console.log(`server running on port ${port}`);
});
