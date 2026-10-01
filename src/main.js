import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'
// import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  // theme: {
  //   primary: '#f44336',
  //   secondary: '#9575CD',
  //   accent: '#9c27b0',
  //   error: '#f44336',
  //   warning: '#3949AB',
  //   info: '#2196f3',
  //   success: '#4caf50'
  // }
})
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDfFAQQ-S_SNLT48w4yq6nTjHnq5sxZ3Mg',
      authDomain: 'itc-ads-9670c.firebaseapp.com',
      databaseURL: 'https://itc-ads-9670c-default-rtdb.firebaseio.com',
      projectId: 'itc-ads-9670c',
      storageBucket: 'itc-ads-9670c.firebasestorage.app',
      messagingSenderId: '553914584592'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
