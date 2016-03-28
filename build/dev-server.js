var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var favicon = require('express-favicon')

var app = express()
var compiler = webpack(config)
// 设置资源目录
app.use('/static', express.static(path.join(__dirname, '../src')))
app.use('/data', express.static(path.join(__dirname, '../src/data')))
app.use('/img', express.static(path.join(__dirname, '../src/assets/img')))

app.use(favicon(path.join(__dirname, '../favicon.ico')))
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler))

app.listen(8000, '127.0.0.1', function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://127.0.0.1:8000')
})
