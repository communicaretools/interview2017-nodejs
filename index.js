const express = require('express')
const app = express()
const json = require('express-json')
const bodyParser = require('body-parser')

app.set('etag', false)
app.use(express.static('public'))
app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
});
app.use(bodyParser.json());
app.use(json());

app.use('/api/registrations', require('./server/registrations.js'))
app.use('/api/studies', require('./server/studies.js'))

app.listen(3000, function () {
  console.log('Backend listening on port 3000')
})
