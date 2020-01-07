<template>
  <div id="app">
    <main v-if="user" />
    <login v-else />

    <p v-if="user">Logged in</p>
    <p v-else>Not logged in</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Main from './Main.vue'
import Login from './Login.vue'
import firebase from 'firebase/app'

@Component({
  components: {
    Main,
    Login,
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
