<template>
  <div>
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
export default class Main extends Vue {
  showPrivate: boolean = false

  views = views

  toggleShowPrivate() {
    this.showPrivate = !this.showPrivate
  }
}
</script>

<style></style>
