var webpack = require('webpack')
var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
config.devtool = 'eval-source-map'

// add hot-reload related code to entry chunk
config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?quiet=true&reload=true',
  config.entry.app
]

config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
  }),
  new BrowserSyncPlugin(
    // BrowserSync options
    {
      host: '127.0.0.1',
      port: 8080,
      proxy: 'http://127.0.0.1:8000/',
      logConnections: false,
      notify: false
    },
    // plugin options
    {
      reload: true
  })
])

module.exports = config
