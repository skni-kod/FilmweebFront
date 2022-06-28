module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "^/api/": {
        target: "http://papaj.pro:6969/",
        pathRewrite: { "^/api/": "/" },
        changeOrigin: true,
        logLevel: "debug"
      }
    }
  }
}
