const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8081,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'FDB-WEB',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.module.rule('scss').oneOfs.store.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .end()
    })
    config.module
      .rule('font')
      .test(/\.(woff|woff2|eot|ttf|otf)$/)
      .use('url-loader')
      .loader('url-loader')
      .end()
  }
}
