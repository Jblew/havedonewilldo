<template>
  <div class="pair-view mb-5">
    <b-card-group deck>
      <remote-markdown-view :title="pair.public.title" :url="pair.public.url" />
      <remote-markdown-view
        v-if="showPrivate"
        :title="pair.private.title"
        :url="pair.private.url"
      />
    </b-card-group>
    <hr class="mt-5 d-sm-none" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RemoteMarkdownView } from './remotemarkdownview'
import { ViewPair } from '../model'

@Component({ components: { RemoteMarkdownView } })
export default class Grid extends Vue {
  @Prop({ required: true, type: Object })
  pair!: ViewPair

  @Prop({ required: true, type: Boolean })
  showPrivate!: boolean
}
</script>
<style>
.pair-view {
}
</style>
