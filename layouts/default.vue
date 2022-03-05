<template>
  <div>
    <b-navbar fixed-top :transparent="true" type="is-primary">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div class="image">
            <img
              src="~/assets/img/logo.jpg"
              class="is-rounded"
              alt="MAT Logo"
            />
          </div>
        </b-navbar-item>
      </template>
      <template v-if="$auth.loggedIn" #start>
        <b-navbar-item tag="router-link" :to="{ path: '/cases' }">
          Awarenessvorfälle
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/targets' }">
          Personen
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/chats' }">
          Chats
        </b-navbar-item>
      </template>
      <template v-if="$auth.loggedIn" #end>
        <b-navbar-item tag="router-link" :to="{ path: '/profil' }">
          Profil
        </b-navbar-item>
        <b-navbar-item @click="logout()"> Abmelden </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content p-3">
      <div class="columns is-centered">
        <div class="column is-half">
          <Nuxt />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
})
</script>
<style>
.field input.input[disabled], button.button[disabled] {
  cursor: default;
}
</style>
