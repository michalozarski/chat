const expect = require('expect');

const {
  Users
} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Michal',
      room: 'testRoom'
    },
    {
      id: '2',
      name: 'Luki',
      room: 'otherRoom'
    },
    {
      id: '3',
      name: 'Krzys',
      room: 'testRoom'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Michal',
      room: 'test room'
    };
    var resUSer = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove users', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove users', () => {
    var userId = 2;
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find users', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find users', () => {
    var userId = 7;
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for testRoom', () => {
    var userList = users.getUserList('testRoom');

    expect(userList).toEqual(['Michal', 'Krzys']);
  });

  it('should return names for otherRoom', () => {
    var userList = users.getUserList('otherRoom');

    expect(userList).toEqual(['Luki']);
  });

});
