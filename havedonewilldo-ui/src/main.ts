import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { FIREBASE_CONFIG } from './config/firebase.config'

firebase.initializeApp(FIREBASE_CONFIG)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
