<template>
  <div id="app">
    <Header />
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import Header from '@/components/Header'
import firebase from 'firebase/app'
import 'firebase/messaging'

export default {
  name: 'App',
  components: {
    Header
  },
  beforeCreate () {
    const locale = localStorage.getItem('lang')
    if (!locale) {
      localStorage.getItem('lang', 'bg')
    } else {
      this.$i18n.locale = locale
    }
  },
  async created () {
    const messaging = firebase.messaging()
    // [START messaging_get_token]
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    if ('PushManager' in window && 'serviceWorker' in navigator) {
      // const sw = await navigator.serviceWorker.register('firebase-messaging-sw.js')
      // messaging.useServiceWorker(sw)

      await messaging.requestPermission()
      const token = await messaging.getToken({
        vapidKey: process.env.VUE_APP_VAPID_KEY
      })
      // SAVE OR DELETE TOKEN FROM DB
      console.log(token)
    }
    messaging.onMessage(function (payload) {
      console.log(payload)
    })
    // console.log('token')
    // messaging
    //   .requestPermission()
    //   .then(() => {
    //     return messaging.getToken({
    //       vapidKey: process.env.VUE_APP_VAPID_KEY
    //     })
    //   })
    //   .then(token => {
    //     console.log(token)
    //   })
    //   .catch()
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: Oswald-VariableFont_wght;
  src: url('./assets/fonts/Oswald-VariableFont_wght.ttf');
}
@font-face {
  font-family: Roboto-Regular;
  src: url('./assets/fonts/Roboto-Regular.ttf');
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  line-height: 1.5;
}
body {
  position: relative;
  background: url('./assets/imgs/front-page.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 15rem;
}
:root {
  font-size: 62.5%;
}
#app {
  font-family: $primary-font;
  color: #666;
  margin: 0 auto;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #333;
}
ul,
ol {
  display: flex;
  flex-direction: column;
}
li {
  list-style: none;
  font-size: 16px;
}
a {
  text-decoration: none;
  color: #333;
  &:focus {
    outline: none;
    color: none;
  }
}
p {
  font-size: 16px;
}
button {
  cursor: pointer;
}

@media (max-width: 992px) {
  body {
    padding-top: 13rem;
  }
}
</style>
