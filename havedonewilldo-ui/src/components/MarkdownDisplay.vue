<template>
  <div>
    <span v-html="htmlContent"></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt(({
  html: true
}))

@Component
export default class MarkdownDisplay extends Vue {
  @Prop() private markdown!: string

  htmlContent: string = ''

  beforeMount() {
    this.generateHtml()
  }

  @Watch('markdown')
  onMarkdownInputChange(newMarkdown: string) {
    this.generateHtml()
  }

  generateHtml() {
    try {
      this.htmlContent = md.render(this.markdown)
    } catch (error) {
      /* eslint-disable no-console */
      console.error(error)
      this.htmlContent = `Error:  ${error.message}`
    }
  }
}
</script>
