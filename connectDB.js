// // Using Node.js `require()`
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/MyData')
//   .then(() => console.log('Connected!')).catch(() => console.log('connect fail'));

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const user = new Schema({
//   name: String
// }, {
//   collection:'User'
// });

// const banner = new Schema({
//   title: String,
//   image: String,
//   type : String,
//   isFree: Boolean
// }, {
//   collection:'Banner'
// })

// const deck = new Schema({
//   img: Number,
//   infor: String,
//   url: String,
//   folder: String,
//   like_count: Number,
//   id_deck: Number,
//   name: String,
//   description: String,
//   banner: String
// }, {
//   collection:'Decks'
// });

// const MyModel = mongoose.model('user', user);

// const MyDecks = mongoose.model('decks', deck);

// const Banner = mongoose.model('banner', banner);

// // MyModel.create({
// //   name:'Tuan Anh dz'
// // })

// module.exports = {
//   Banner,
//   MyDecks,
//   MyModel
// }
