/* eslint-disable no-console */

import { register } from 'register-service-worker'
import { Store } from 'vuex'

export function setupServiceWorker(store: Store<any>) {
  if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
      ready() {
        console.log(
          'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
        )
      },
      registered() {
        // service worker caching properly
        console.log('Service worker has been registered.')
        store.commit('setSwRefresh', 'Service worker has been registered. Please refresh to enable caching and offline mode.')
      },
      cached() {
        console.log('Content has been cached for offline use.')
      },
      updatefound() {
        console.log('New content is downloading.')
      },
      updated() {
        console.log('New content is available; please refresh.')
      },
      offline() {
        console.log('No internet connection found. App is running in offline mode.')
        store.commit('setSwRefresh', 'No internet connection found. App is running in offline mode.')
      },
      error(error) {
        console.error('Error during service worker registration:', error)
      }
    })
  }
}
