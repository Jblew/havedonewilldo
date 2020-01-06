<template>
  <div id="app">
    <Header />
    <Grid :showPrivate="showPrivate" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Grid, Header } from './components'

@Component({
  components: {
    Header,
    Grid
  }
})
export default class App extends Vue {
  showPrivate: boolean = false
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
