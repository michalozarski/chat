  var socket = io();

  socket.on('connect', function() {
    console.log('Conncted to server');
    var params = $.deparam(window.location.search);

    socket.emit('join', params, function(err) {
      if (err) {
        alert(err);
        console.log(err);
        window.location.href = './';
      } else {
        console.log('OK!');
      }
    });
  });

  socket.on('disconnect', function() {
    console.log('Disconnected from server');
    socket.emit('join', params, function(err) {
      if (err) {

      } else {

      }
    });
  });

  socket.on('updateUserList', function (users) {
    var ol = $('<ol></ol>');
    users.forEach(function (user) {
      ol.append($('<li></li>').text(user));
    });

    $('#users').html(ol);
//    console.log('User list: ', users);
  });

  socket.on('newMessage', function(message) {
    var formattedTime = moment(message.createAt).format('h:mm a');
    var template = $('#message-template').html();
    var html = Mustache.render(template, {
      text: message.text,
      from: message.from,
      createdAt: formattedTime
    });

    $('#messages').append(html);

  })

  socket.on('newLocationMessage', function(message) {
    var formattedTime = moment(message.createAt).format('h:mm a');
    var template = $('#location-template').html();
    var html = Mustache.render(template, {
      url: message.url,
      from: message.from,
      createdAt: formattedTime
    });


    $('#messages').append(html);


  });

  $('#message-form').on('submit', function(e) {
    e.preventDefault();
    var messageTextBox = $('[name=message]');
    socket.emit('createMessage', {
      from: 'User',
      text: messageTextBox.val()
    }, function() {
      messageTextBox.val('');
    });
  });

  var locationButton = $('#send-location');

  locationButton.on('click', function() {
    if (!navigator.geolocation) {
      return alert('Geolocation not supported by your browser');
    }
    locationButton.attr('disabled', 'disabled').text('Sending location...');
    navigator.geolocation.getCurrentPosition(function(position) {
      locationButton.removeAttr('disabled').text('Send location');
      socket.emit('createLocationMessage', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }, function() {
      alert('Unable to fetch location');
      locationButton.removeAttr('disabled').text('Send location');
    });
  });
