module.exports = {
  devServer: {
    disableHostCheck: true,
    overlay: {
      errors: false
    }
  },
  pwa: {
    name: 'Aurial2',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
}
