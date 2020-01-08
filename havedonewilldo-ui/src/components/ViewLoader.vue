<template>
  <card-viewport :title="title">
    <b-alert v-if="error.length > 0" variant="danger" show>{{ error }}</b-alert>
    <b-alert v-else-if="loading" variant="info" show>Loading...</b-alert>
    <markdown-display v-else :markdown="content" />
  </card-viewport>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ViewGroup, View } from '../model'
import CardViewport from './CardViewport.vue'
import MarkdownDisplay from './MarkdownDisplay.vue'
import { fetchContentForView } from '../helper/fetchContentForView'

@Component({ components: { MarkdownDisplay, CardViewport } })
export default class ViewLoader extends Vue {
  @Prop({ required: true, type: Object })
  view!: View

  loading: boolean = true
  error: string = ''
  content: string = ''

  get title(): string {
    return this.view.title
  }

  beforeMount() {
    this.loadContent()
  }

  loadContent() {
    ; (async () => {
      try {
        this.content = await fetchContentForView(this.view)
      } catch (err) {
        /* eslint-disable no-console */
        console.warn('Error while loading content for ' + this.view.title, err)
        this.error = err.message
      }
      this.loading = false
    })()
  }
}
</script>
