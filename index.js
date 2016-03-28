var express = require('express')
var path = require('path')
var app = express()
var favicon = require('express-favicon')

app.use('/static', express.static(path.join(__dirname, './dist/static/')))
app.use('/data', express.static(path.join(__dirname, './src/data')))
app.use('/img', express.static(path.join(__dirname, './src/assets/img')))

app.use(favicon(path.join(__dirname, './favicon.ico')))

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './dist') })
})

var server = app.listen(3030, '127.0.0.1', function () {

  var host = server.address().address
  var port = server.address().port

  console.log('vue-sui-demo listening at http://%s:%s', host, port)

})
