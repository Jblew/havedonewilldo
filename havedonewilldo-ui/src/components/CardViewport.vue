<template>
  <b-card :header="title" class="cardviewport">
    <slot></slot>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardViewport extends Vue {
  @Prop({ required: true, type: String })
  title!: string
}
</script>
<style>
.cardviewport {
  max-height: 20rem;
  overflow-y: scrol;
}
</style>
