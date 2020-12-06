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
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/getCoverArt/,
        handler: 'CacheFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'images',
          // Only cache 300 images.
          expiration: {
            maxEntries: 300,
          }
        }
      },
      {
        // Music request
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/stream/,
        handler: 'CacheFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'musics',
          // Only cache 500 musics.
          expiration: {
            maxEntries: 500,
          }
        }
      },
      {
      // Lists requests
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/(getAlbumList2|getArtists|getPlaylists|getGenres|getStarred2|getRandomSongs)/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'lists',
          // Only cache 200 lists.
          expiration: {
            maxEntries: 200,
          }
        }
      },
      {
      // Info requests
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/(getAlbum|getArtist|getArtistInfo2|)/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'infos',
          // Only cache 200 lists.
          expiration: {
            maxEntries: 200,
          }
        }
      },
      {
      // Connection cache
        urlPattern: /https:\/\/music\.catheu\.tech\/rest\/(ping.view)/,
        handler: 'NetworkFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'connection',
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
