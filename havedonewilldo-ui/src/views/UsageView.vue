<template>
  <div>
    <app-header title="havedonewilldo" @logout="emitLogout()" />

    <h1>How to use</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AppHeader } from '../components'

@Component({ components: { AppHeader } })
export default class UsageView extends Vue {
  emitLogout() {
    this.$emit('logout')
  }
}
</script>
