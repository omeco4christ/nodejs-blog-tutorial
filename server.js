// server.js

// load http module
const http = require('http')

// load the Express module
const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false }))

// load own modules
const createUsers = require('./modules/createUsers')
const removeUsers = require('./modules/removeUsers')
const createBlogs = require('./modules/createBlogs')
const removeBlogs = require('./modules/removeBlogs')
const queryBlogs = require('./modules/queryBlogs')

// define the routes
app.get('/', (req, res) => {
  res.send( 'Hello, this is my home Page' )
})


app.post('/createusers', (req, res) => {
  createUsers(req, res)
  res.send('User has been added successfully.')
})

app.post('/removeusers', (req, res) => {
  removeUsers(req, res)
  res.send('User has been successfully removed.')
})


app.post('/createblogs', (req, res) => {
  createBlogs(req, res)
  res.send('Blog has been added successfully.')
})

app.post('/removeblogs', (req, res) => {
  removeBlogs(req, res)
  res.send('Blog has been successfully removed.')
})


app.get('/about/:name?', (req, res) => {
  res.send('Hello, this is my about Page')
})

// create the server
const server = http.createServer(app);

// server listen for any incoming requests
server.listen(3000);

console.log('My express web server is alive and running at port 3000')