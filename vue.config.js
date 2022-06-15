module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "^/api/": {
        target: "https://filmweebback.herokuapp.com",
        pathRewrite: { "^/api/": "/" },
        changeOrigin: true,
        logLevel: "debug"
      }
    }
  }
}
