var moment = require('moment');

var date = moment();
date.add(1, 'year').subtract(1, 'month');
console.log(date.format('D MMMM Y'));
