module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "^/api/": {
        //target: "http://papaj.pro:6969/",
        target: "https://filmweebback.herokuapp.com/",
        pathRewrite: { "^/api/": "/" },
        changeOrigin: true,
      }
    }
  }
}
