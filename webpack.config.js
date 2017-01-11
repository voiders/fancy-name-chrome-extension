const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./src/config/environment')

const plugins = [
  new webpack.DefinePlugin({
    '__DEV__': JSON.stringify(config.isDev)
  })
]
let devtool
const entry = {
  'chromereload': [config.CHROMERELOAD],
  'contentscript': config.CONTENTSCRIPT_PATH
}
let externals = []

const modules = {
  preLoaders: [{
    test: /\.js$/,
    loader: 'eslint',
    exclude: /node_modules/
  }],
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    { test: /\.json$/, loader: 'json' },
    { test: /\.css?$/, loader: ExtractTextPlugin.extract('style', 'css') },
    { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus') },
    { test: /\.worker\.js?$/, loaders: ['worker?name=workers/[name].[ext]', 'babel'] },
    { test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      loader: 'file',
      query: {
        name: 'assets/[name].[hash:8].[ext]'
      }
    }
  ]
}

const resolve = {
  extensions: ['', '.js', '.css', '.styl']
}
const resolveLoader = {
  root: config.MODULES_PATH
}
const output = {
  path: config.BUILD_PATH,
  publicPath: '/',
  filename: '[name].js'
}

if (config.isProd) {
  plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].css')
  )
} else {
  devtool = 'cheap-module-source-map'
  plugins.push(
    new ExtractTextPlugin('[name].css')
  )
}

module.exports = {
  watch: config.isDev,
  devtool,
  entry,
  output,
  externals,
  module: modules,
  plugins,
  resolve,
  resolveLoader
}
