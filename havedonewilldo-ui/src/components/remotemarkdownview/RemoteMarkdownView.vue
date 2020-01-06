<template>
  <b-card :header="title">
    <markdown-view :markdown="markdown" />
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MarkdownView from './MarkdownView.vue'

@Component({ components: { MarkdownView } })
export default class RemoteMarkdownView extends Vue {
  @Prop({ required: true, type: String })
  private title!: string

  markdown = '*Loading, please wait...*'
}
</script>
