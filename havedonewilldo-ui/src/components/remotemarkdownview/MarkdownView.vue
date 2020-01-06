<template>
  <div>
    <span v-html="htmlContent"></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

@Component
export default class MarkdownView extends Vue {
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
    this.htmlContent = md.render(this.markdown)
    console.log('Markdown: ', this.markdown)
    console.log('htmlContent', this.htmlContent)
  }
}
</script>
