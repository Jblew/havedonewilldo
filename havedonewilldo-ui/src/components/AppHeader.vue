<template>
  <div class="navbar-container">
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-nav-form class="mr-2" v-if="typeof showPrivate === 'boolean'">
        <b-button
          size="sm"
          :variant="btnVariant"
          class="my-2 my-sm-0 mr-2"
          @click="emitToggleShowPrivate()"
          >{{ btnText }}</b-button
        >
      </b-nav-form>

      <b-navbar-brand class="mr-auto">{{ title }}</b-navbar-brand>

      <b-nav-form class="ml-2">
        <b-button size="sm" variant="secondary" class="my-2 my-sm-0" @click="emitLogout()"
          >Logout</b-button
        >
      </b-nav-form>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class AppHeader extends Vue {
  @Prop({ required: false })
  showPrivate!: boolean

  @Prop({ required: true, type: String })
  title!: boolean

  get btnText() {
    return this.showPrivate ? 'prv' : 'pub'
  }

  get btnVariant() {
    return this.showPrivate ? 'success' : 'outline-success'
  }

  emitToggleShowPrivate() {
    this.$emit('toggleShowPrivate')
  }

  emitLogout() {
    this.$emit('logout')
  }
}
</script>
<style>
.navbar-container {
  margin-bottom: 5rem;
}
</style>
