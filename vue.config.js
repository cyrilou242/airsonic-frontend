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
      maximumFileSizeToCacheInBytes: 1073741824,
      runtimeCaching: [{
        // Match any vover request
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
      // Match any request that ends with .png, .jpg, .jpeg or .svg.
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
    name: 'Aurial2',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
}
