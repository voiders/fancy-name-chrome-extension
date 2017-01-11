const path = require('path')

const config = {}
config.secret = process.env.SECRET || 'super duper secret for pixore'
config.isDev = process.env.NODE_ENV === 'development'
config.isProd = process.env.NODE_ENV === 'production'
config.isTest = process.env.NODE_ENV === 'test'
config.ROOT_PATH = path.join(__dirname, '..', '..')
config.BUILD_PATH = path.join(config.ROOT_PATH, 'build')
config.MODULES_PATH = path.join(config.ROOT_PATH, 'node_modules')
config.ASSETS_PATH = path.join(config.ROOT_PATH, 'assets')

config.CONTENTSCRIPT_PATH = path.join(config.ROOT_PATH, 'src', 'contentscript.js')
config.CHROMERELOAD = path.join(config.ROOT_PATH, 'src', 'chromereload.js')

module.exports = config
