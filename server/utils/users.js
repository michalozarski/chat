

class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    // remove user
    var user = this.getUser(id);

    if(user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser(id) {
    // get user
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList(room) {
    //rooms
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor(name, age) {
//     this.name =  name;
//     this.age =age;
//   }
//
//   getUserDescription() {
//     return `${this.name} is ${this.age} year old`;
//   }
// }
//
// var me = new Person('Michal', 26);
// var description = me.getUserDescription();
// console.log(description);
