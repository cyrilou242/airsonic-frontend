module.exports = {
  devServer: {
    disableHostCheck: true,
    overlay: {
      errors: false
    }
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      runtimeCaching: [{
        // Match any cover request
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/getCoverArt/,
        // Apply a cache-first strategy.
        handler: 'CacheFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'images',
          // Only cache 1(0 images.
          expiration: {
            maxEntries: 150,
          }
        }
      },
      {
      // Match lists requests
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/getAlbumList2/,
        // Apply a cache-first strategy.
        handler: 'NetworkFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'albums_lists',
          // Only cache 10 albums lists.
          expiration: {
            maxEntries: 10,
          }
        }
      }
      ]
    },
    name: 'aurial2',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
}
