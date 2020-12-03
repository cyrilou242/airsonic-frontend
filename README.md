# Airsonic/Subsonic Web Client
This is a fork of the [airsonic web client project](https://github.com/tamland/airsonic-frontend).
[![](https://github.com/cyrilou242/airsonic-frontend/workflows/CI/badge.svg)](https://github.com/cyrilou242/airsonic-frontend/actions)

Modern responsive web frontend for [Airsonic](https://github.com/airsonic/airsonic). It's currently based on the [Subsonic API](http://www.subsonic.org/pages/api.jsp) and should work with other backends implementing this API as well.

### Additions in this  fork 
- feedback when dragging track into playlist
- floating search bar
- sticky side bar   

![Screenshot](screenshots/album.png)

![Screenshot](screenshots/albumlist.png)


## Supported features
- Responsive UI. Works on mobile and desktop
- Playback with presistent queue
- Browse library for albums, artist, generes and starred songs
- Create, delete and edit playlists
- Search for artists, albums and songs
- Play random songs with the built-in smart playlist


## Demo

https://airsonic.netlify.com

Server: `/api`  
Username: `guest1`  
Password:`guest`

You can use the URL and credentials for your own server if you prefer. **Note**: if your server is using http only you must allow mixed content in your browser otherwise login will not work.


## Install

### Docker
You can install the original project with Docker:  

```
$ docker run -d -p 8080:80 tamland/airsonic-frontend:latest
```

You can now access the application at http://localhost:8080/

Environment variables:
- `SERVER_URL` (Optional): The backend server URL. When set the server input on the login page will not be displayed.


### Pre-built bundle

Pre-built bundles can be found in the [Actions](https://github.com/cyrilou242/airsonic-frontend/actions)
tab. Download/extract artifact and serve with your favourite web server.

### Build from source

```
$ yarn install
$ yarn build
```

Bundle can be found in the `dist` folder.


## Develop

```
$ yarn install
$ yarn serve
```


## License

Licensed under the [AGPLv3](LICENSE) license.
