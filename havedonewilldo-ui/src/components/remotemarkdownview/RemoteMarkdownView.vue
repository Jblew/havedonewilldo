<template>
  <b-card :header="title" class="rmv-card">
    <markdown-view :markdown="content" />
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MarkdownView from './MarkdownView.vue'
import Axios from 'axios'

@Component({ components: { MarkdownView } })
export default class RemoteMarkdownView extends Vue {
  @Prop({ required: true, type: String })
  title!: string

  @Prop({ required: true, type: String })
  url!: string

  content = '*Loading, please wait...*'

  beforeMount() {
    this.loadContent()
  }

  loadContent() {
    ;(async () => {
      try {
        this.content = await this.doFetch()
      } catch (err) {
        console.warn('Error while loading content for ' + this.title, err)
        this.content = formatErrorMessageMd(err.message)
      }
    })()
  }

  async doFetch() {
    const resp = await Axios.get(this.url)
    return resp.data
  }
}

function formatErrorMessageMd(msg: string) {
  return `<span style='color:red'>${msg}</span>`
}
</script>
<style>
.rmv-card {
  max-height: 20rem;
  overflow-y: scrol;
}
</style>
