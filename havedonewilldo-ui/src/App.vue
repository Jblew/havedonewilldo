<template>
  <div id="app">
    <main-view v-if="user" :user="user" />
    <login-view v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MainView from './views/MainView.vue'
import LoginView from './views/LoginView.vue'
import firebase from 'firebase/app'

@Component({
  components: {
    MainView,
    LoginView,
  },
})
export default class App extends Vue {
  user: firebase.User | '' = ''

  beforeMount() {
    this.reactToAuthStateChange()
  }

  reactToAuthStateChange() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('LOGGED IN')
        this.user = user
      } else {
        console.log('NOT LOGGED IN')
        this.user = ''
      }
    })
  }
}
</script>

<style>
body {
  padding-left: 1.5em;
  padding-right: 1.5em;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
