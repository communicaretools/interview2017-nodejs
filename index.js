const express = require('express')
const app = express()
const json = require('express-json')
const bodyParser = require('body-parser')

app.set('etag', false)
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  if (req.url.indexOf('/api') >= 0) {
    res.header("Content-Type",'application/json')
  }
  next()
})

app.use('/api/registrations', require('./server/registrations.js'))
app.use('/api/studies', require('./server/studies.js'))

app.listen(3000, function () {
  console.log('Backend listening on port 3000')
})
