<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as firebase from 'firebase/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

@Component
export default class LoginView extends Vue {
  beforeMount() {
    var uiConfig = {
      signInSuccessUrl: window.location.href,
      signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    }

    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style></style>
