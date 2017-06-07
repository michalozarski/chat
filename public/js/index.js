  var socket = io();

  socket.on('connect', function() {
    console.log('Conncted to server');
    // socket.emit('createMessage', {
    //   from: 'Michal',
    //   text: 'test Text'
    // });
  });

  socket.on('disconnect', function() {
    console.log('Disconnected from server');
  });

socket.on('newMessage', function (message) {
  console.log('new message from server', message);
})
