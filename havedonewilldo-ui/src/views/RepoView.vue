<template>
  <div>
    <app-header
      :showPrivate="showPrivate"
      :title="title"
      @toggleShowPrivate="toggleShowPrivate()"
      @logout="emitLogout()"
    />
    <b-alert v-if="error.length > 0" variant="danger" show>{{ error }}</b-alert>

    <b-alert v-if="!config" variant="info" show
      >Loading {{ repoDisplayname }} for {{ userDisplayname }}...</b-alert
    >
    <Grid v-if="config" :groups="config.groups" :showPrivate="showPrivate" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Grid, AppHeader } from '../components'
import { User } from 'firebase/app'
import { HavedonewilldoConfig } from '../model'
import { fetchConfig } from '../helper/fetchConfig'

@Component({
  components: {
    Grid,
    AppHeader,
  },
})
export default class RepoViewer extends Vue {
  @Prop({ required: true, type: Object })
  user!: User

  @Prop({ required: true, type: Boolean })
  showPrivateInitial!: boolean

  @Prop({ required: true, type: Array })
  repo!: [string, string]

  showPrivate: boolean = false
  error: string = ''
  config: HavedonewilldoConfig | '' = ''

  get userDisplayname() {
    return this.user.displayName
  }

  get repoDisplayname() {
    return `${this.repo[0]}/${this.repo[1]}`
  }

  get title() {
    if (this.config) {
      return this.config.title
    } else {
      return `${this.repoDisplayname}`
    }
  }

  beforeMount() {
    this.showPrivate = this.showPrivateInitial

    this.loadConfigFromRepo()
  }

  loadConfigFromRepo() {
    ; (async () => {
      try {
        this.config = await fetchConfig(this.repo[0], this.repo[1])
      } catch (error) {
        this.error = error.message
        /* eslint-disable no-console */
        console.error(this.error)
      }
    })()
  }

  toggleShowPrivate() {
    this.showPrivate = !this.showPrivate
  }

  emitLogout() {
    this.$emit('logout')
  }
}
</script>

<style></style>
