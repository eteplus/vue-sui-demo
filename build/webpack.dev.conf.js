var webpack = require('webpack')
var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

config.output.filename = '[name].js'
config.output.chunkFilename = '[id].js'

var SOURCE_MAP = true

config.devtool = SOURCE_MAP ? 'eval-source-map' : false

// add hot-reload related code to entry chunk
config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?quiet=true&reload=true',
  config.entry.app
]

// generate loader string to be used with extract text plugin
function generateExtractLoaders (loaders) {
  return loaders.map(function (loader) {
    return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '')
  }).join('!')
}

config.vue.loaders = {
  js: 'babel!eslint',
  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
  less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
  sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
  stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus']))
}

config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('[name].css'),
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
    {
      reload: true
    }
  )
])

module.exports = config
