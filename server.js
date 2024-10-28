// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
//   console.log("hello")
// })

// app.listen(3000)
// console.log("hello")
// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World ddddddd');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//npm i --save-exact express@4.18.2

require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
// const { Banner, MyDecks, MyModel } = require('./connectDB')
const fs = require('fs-extra');
const translate = require('translate-google')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const configEngine = require('./src/config/viewEngine')
const { da, de } = require('translate-google/languages')
const { log } = require('console')
const { render } = require('ejs')
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

//config engine
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

//config static file
// app.use(express.static(path.join(__dirname, 'src/public')))
app.use(express.static(path.join(__dirname, 'Applight')))
// app.get('/add', (req, res) => {
  // res.render('./deckfile.json')
  // console.log('vao app roi nhe')
  // const data = require('./deckfile.json')
  // var object = Object.values(data)
  // object.forEach(myFunction)
  // async function myFunction(item) {
  //   MyDecks.create({
  //     img: 0,
  //     infor: 'hello',
  //     url: 'https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-28.jpg',
  //     folder: 'Number',
  //     like_count: 0,
  //     id_deck: item.id,
  //     name: item.name,
  //     description: item.description,
  //     banner: item.banner
  //   })

    // translate(item, { to: 'zh-cn', except: ['a'] }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.error(err)
    // })
  // }
  //data banner default
//   Banner.create({
//     title: 'banner 1',
//     image:'https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-28.jpg',
//     type:'Category',
//     isFree: false
//   })
// })

let data = fs.readJsonSync('deckfile.json');

// app.get('/file', (req, res) => {
//   const options = {
//     root: path.join(__dirname)
//   };
//   res.sendFile('deckfile.json', options)
//   const data = require('./deckfile.json')
//   var object = Object.values(data)
//   object.forEach(myFunction)
//   async function myFunction(item) {
//     translate(item, { to: 'zh-cn', except: ['a'] }).then(res => {
//       console.log(res)
//     }).catch(err => {
//       console.error(err)
//     })
//   }
// })

// app.post('/homepage', async (req, res, next) => {
  // try {
  //   var appId = req.body.appId
  //   var language = req.body.language
  //   console.log('data :', language == 'en')
  //   if (language == 'en') {
  //     const banner = await Banner.find({});
  //     const freeDesk = await MyDecks.find({});
  //     const result = {
  //       status: 'success',
  //       data: {
  //         banner: banner,
  //         freeDesk: freeDesk
  //       }
  //     };
  //     res.json(result)
  //   }
  // } catch (error) {
  //   res.status(500).json({ error: 'Error fetching data' })
  // }
// })

// app.get('/ta', (req, res) => {
//   res.render('./sample.ejs')
//   // database.find({}).then(function (data) {
//   //   console.log('data :', data)
//   // }).catch(err => {
//   //   console.log(err)
//   // })
// })
// 
// // get user database
// app.post('/', (req, res, next) => {

//   MyModel.find({})
//     .then(data => {
//       res.json(data)
//     }).catch(error => {
//       res.statusCode(500).json('tao thai khoan that bai r nhe b')
//     })
// })

// //post 
// app.post('/register', (req, res, next) => {
//   var username = req.body.username
//   var password = req.body.password

//   MyModel.create({
//     name: username,
//   })
//     .then(data => {
//       res.json('tao tai khoan thanh cong ${username}')
//     }).catch(error => {
//     })
// })


// app.post('/login', (req, res, next) => {
//   var username = req.body.username
//   MyModel.findOne({
//     name: username
//   }).then(data => {
//     if (data) {
//       res.json('dang nhap thanh cong')
//     } else {
//       res.status(400).json('dang nhap that bai')
//     }

//   }).catch(error => {
//     res.statusCode(500).json('dang nhap loi r ban oi')
//   })
// })
// app.listen(port, hostname, () => {
//   console.log(`Example app listening on port ${port} locallhost http://localhost:${port}`)
// })

//test server
// const express = require('express')

// const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  console.log(`Server running at http://${hostname}:${port}/`);
  res.send('/index.html')
})

app.get('/app-ads.txt', (req, res) => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // res.send('/index.html')
  res.sendFile(path.join(__dirname, 'app-ads.txt'));
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Example app listening on port ${port}`)
})