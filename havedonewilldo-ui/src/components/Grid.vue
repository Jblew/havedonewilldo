<template>
  <div>
    <p>Grid</p>
    <remote-markdown-view title="AHPA public" />
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RemoteMarkdownView } from './remotemarkdownview'

@Component({ components: { RemoteMarkdownView } })
export default class Grid extends Vue {}
</script>
