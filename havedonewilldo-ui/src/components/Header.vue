<template>
  <div class="navbar-container">
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-nav-form class="mr-2">
        <b-button
          size="sm"
          :variant="btnVariant"
          class="my-2 my-sm-0"
          @click="emitToggleShowPrivate()"
          >{{ btnText }}</b-button
        >
      </b-nav-form>

      <b-navbar-brand href="#"
        >prjs:status ~ <sup>Jędrzej</sup> <sub>Lewandowski</sub></b-navbar-brand
      >
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop({ required: true, type: Boolean })
  showPrivate!: boolean

  get btnText() {
    return this.showPrivate ? 'prv' : 'pub'
  }

  get btnVariant() {
    return this.showPrivate ? 'success' : 'outline-success'
  }

  emitToggleShowPrivate() {
    this.$emit('toggleShowPrivate')
  }
}
</script>
<style>
.navbar-container {
  margin-bottom: 5rem;
}
</style>
