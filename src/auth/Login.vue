<template>
  <div>
    <b-modal size="sm" hide-header hide-footer no-close-on-esc :visible="showModal">
      <form @submit.prevent="login">
        <div style="font-size: 4rem; color: #fff;" class="text-center">
          <Icon icon="person-circle" />
        </div>
        <b-form-group v-if="!config.serverUrl" label="Server">
          <b-form-input v-model="server" name="server" type="text" :state="valid" />
        </b-form-group>
        <b-form-group label="Username">
          <b-form-input v-model="username" name="username" type="text" :state="valid" />
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input v-model="password" name="password" type="password" :state="valid" />
        </b-form-group>
        <b-alert :show="error != null" variant="danger">
          <template v-if="error != null">
            Could not log in. ({{ error.message }})
          </template>
        </b-alert>
        <button class="btn btn-primary btn-block" :disabled="busy" @click="login">
          <b-spinner v-show="busy" small type="grow" /> Log in
        </button>
      </form>
    </b-modal>
  </div>
</template>>
<script lang="ts">
  import Vue from 'vue'
  import { config } from '@/shared/config'

  export default Vue.extend({
    props: {
      returnTo: { type: String, required: true },
    },
    data() {
      return {
        server: '',
        username: '',
        password: '',
        rememberLogin: true,
        busy: false,
        error: null,
        showModal: false,
      }
    },
    computed: {
      valid(): false | null {
        return this.error == null ? null : false
      },
      config: () => config
    },
    async created() {
      this.server = await this.$auth.server
      this.username = await this.$auth.username
      const success = await this.$auth.autoLogin()
      if (success) {
        this.$store.commit('setLoginSuccess', {
          username: this.username,
          server: this.server,
        })
        this.$router.replace(this.returnTo)
      } else {
        this.showModal = true
      }
    },
    methods: {
      login() {
        this.error = null
        this.busy = true
        this.$auth.loginWithPassword(this.server, this.username, this.password, this.rememberLogin)
          .then(() => {
            this.$store.commit('setLoginSuccess', {
              username: this.username,
              server: this.server,
            })
            this.$router.replace(this.returnTo)
          })
          .catch(err => {
            this.error = err
          })
          .finally(() => {
            this.busy = false
          })
      }
    }
  })
</script>
