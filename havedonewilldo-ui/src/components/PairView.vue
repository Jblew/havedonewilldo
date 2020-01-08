<template>
  <div class="mb-5" v-if="showPublic || doIShowPrivate">
    <b-card-group deck>
      <view-loader v-if="showPublic" :view="group.public" />
      <view-loader v-if="doIShowPrivate" :view="group.private" />
    </b-card-group>
    <hr class="mt-5 d-sm-none" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ViewGroup } from '../model'
import ViewLoader from './ViewLoader.vue'

@Component({ components: { ViewLoader } })
export default class PairView extends Vue {
  @Prop({ required: true, type: Object })
  group!: ViewGroup

  @Prop({ required: true, type: Boolean })
  showPrivate!: boolean

  get showPublic(): boolean {
    return !!this.group.public
  }

  get doIShowPrivate(): boolean {
    return !!this.group.private && this.showPrivate
  }
}
</script>
<style>
</style>
