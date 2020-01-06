<template>
  <div>
    <span v-for="(pair, index) in views" :key="index">
      <pair-view :pair="pair" :showPrivate="showPrivate" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PairView from './PairView.vue'
import { ViewPair } from '../model'

@Component({ components: { PairView } })
export default class Grid extends Vue {
  @Prop({ required: true, type: Array })
  views!: ViewPair[]

  @Prop({ required: true, type: Boolean })
  showPrivate!: boolean
}
</script>
