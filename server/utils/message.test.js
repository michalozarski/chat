var expect = require('expect');
var {generateMessage, generateLocationMessage}  = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'a sample message';
    var message = generateMessage(from, text);
    //store res in var
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
    //assert from match
    //assert text match
    // assert createdAt is number
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 14;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=14,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
