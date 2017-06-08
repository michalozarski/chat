const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log(`new user connected. users connected: ${io.engine.clientsCount}`);

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat'));
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

// socket.emit('newMessage', {
//   from: 'Mike',
//   text: 'text test',
//   createdAt: 123123
// });

socket.on('createMessage', (message) => {
  console.log('createMessage', message);
  io.emit('newMessage', generateMessage(message.from, message.text));

  // socket.broadcast.emit('newMessage', {
  //   from: message.from,
  //   text: message.text,
  //   createdAt: new Date()
  // });
});

  socket.on('disconnect', () => {
    console.log('user disconnected');
    console.log(`users connected: ${io.engine.clientsCount}`);
  })
});

server.listen(port, () =>  {
  console.log(`server running on port ${port}`);
});
