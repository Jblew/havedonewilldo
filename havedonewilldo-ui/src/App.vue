<template>
  <div id="app">
    <Header :showPrivate="showPrivate" @toggleShowPrivate="toggleShowPrivate" />
    <b-container fluid>
      <Grid :showPrivate="showPrivate" :views="views" />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Grid, Header } from './components'
import { views } from './views'
@Component({
  components: {
    Header,
    Grid,
  },
})
export default class App extends Vue {
  showPrivate: boolean = false

  views = views

  toggleShowPrivate() {
    this.showPrivate = !this.showPrivate
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
