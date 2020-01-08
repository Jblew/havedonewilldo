<template>
  <div>
    <repo-view
      v-if="repo"
      :user="user"
      :repo="repo"
      :showPrivateInitial="showPrivateInitial"
      @logout="emitLogout()"
    />
    <usage-view v-else @logout="emitLogout()" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { User } from 'firebase/app'
import RepoView from './RepoView.vue'
import UsageView from './UsageView.vue'

@Component({
  components: {
    RepoView,
    UsageView,
  },
})
export default class MainView extends Vue {
  @Prop({ required: true, type: Object })
  user!: User

  get repo(): [string, string] | '' {
    const pathParts = window.location.pathname.split('/')
    if (pathParts.length === 3) {
      return [pathParts[1], pathParts[2]]
    } else return ''
  }

  get showPrivateInitial(): boolean {
    return window.location.hash === '#prv'
  }

  emitLogout() {
    this.$emit('logout')
  }
}
</script>

<style></style>
