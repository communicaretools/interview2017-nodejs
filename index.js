const express = require('express')
const app = express()
const json = require('express-json')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(json());
app.use(express.static('public'))

app.use('/api/registrations', require('./server/registrations.js'))
app.use('/api/studies', require('./server/studies.js'))

app.listen(3000, function () {
  console.log('Backend listening on port 3000')
})
