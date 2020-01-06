<template>
  <div>
    <h1>Jędrzej Lewandowski <small>[HaveDone.willdo]</small></h1>
    <h2>Project status public + private</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop() private msg!: string
}
</script>
