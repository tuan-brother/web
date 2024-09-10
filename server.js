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
const database = require('./connectDB')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const configEngine = require('./src/config/viewEngine')
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

//config engine
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname, 'src/public')))
app.use(express.static(path.join(__dirname, 'Applight')))
app.get('/', (req, res) => {
  res.render('./index.html')
})

app.get('/ta', (req, res) => {
  res.render('./sample.ejs')
  database.find({}).then(function(data) {
    console.log('data :', data)
  }).catch(err=>{
    console.log(err)
  })
})

// get user database
app.post('/', (req, res, next) => {

  database.find({})
  .then(data => {
    res.json(data)
  }).catch(error => {
    res.statusCode(500).json('tao thai khoan that bai r nhe b')
  })
})

//post 
app.post('/register', (req, res, next) => {
  var username = req.body.username
  var password = req.body.password

  database.create({
    name : username,
  })
  .then(data => {
    res.json('tao tai khoan thanh cong ${username}')
  }).catch(error => {
    res.statusCode(500).json('tao thai khoan that bai r nhe b')
  })
})


app.post('/login', (req, res, next) => {
  var username = req.body.username
  database.findOne({
    name : username
  }).then(data => {
    if(data) {
      res.json('dang nhap thanh cong')
    }else {
      res.status(400).json('dang nhap that bai')
    }
      
  }).catch(error => {
    res.statusCode(500).json('dang nhap loi r ban oi')
  })
})
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port} locallhost http://localhost:${port}`)
})