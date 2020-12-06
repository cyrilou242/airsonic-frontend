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
      exclude: ['_redirects', /css\/app\..*\.css\.map/],
      runtimeCaching: [{
        // Cover request
        // not working due to response format
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/getCoverArt/,
        // Apply a cache-first strategy.
        handler: 'CacheFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'images',
          // Only cache 150 images.
          expiration: {
            maxEntries: 150,
          }
        }
      },
      {
      // Lists requests
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/(getAlbumList2)/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'albums_lists',
          // Only cache 50 lists.
          expiration: {
            maxEntries: 50,
          }
        }
      },
      {
      // Connection cache
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/(ping.view)/,
        handler: 'NetworkFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'albums_lists',
          // Only cache 3 connections
          expiration: {
            maxEntries: 3,
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
