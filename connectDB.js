// Using Node.js `require()`
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MyData')
  .then(() => console.log('Connected!')).catch(() => console.log('connect fail'));

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
  name: String
}, {
  collection:'User'
});

const MyModel = mongoose.model('user', user);

// MyModel.create({
//   name:'Tuan Anh dz'
// })

module.exports = MyModel
