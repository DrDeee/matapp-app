<template>
  <Page title="Profil" style="min-height: 80vh">
    <div v-if="user" class="mt-3">
      <b-field label="User-ID" label-position="on-border">
        <b-input v-model="id" disabled expanded />
      </b-field>
      <b-field label="User-Name" label-position="on-border">
        <b-input v-model="user.userName" disabled expanded />
      </b-field>
      <b-field label="Anzeige-Name" label-position="on-border">
        <b-input v-model="newName" :disabled="!editName" expanded />
        <template #message>
          <div class="is-flex is-justify-content-space-between">
            <div>
              <div v-if="editName">* Der Anzeige-Name darf nicht '' sein.</div>
            </div>
            <div class="has-text-right">
              <a v-if="!editName" @click="editName = true">bearbeiten</a>
              <a v-if="editName" @click="reset()">abbrechen</a>
              <a v-if="editName" @click="rename()">fertig</a>
            </div>
          </div>
        </template>
      </b-field>
    </div>
  </Page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProfilePage extends Vue {
  user: any = false

  get id() {
    return this.user ? this.user.id + ' (' + this.user.externalId + ')' : null
  }

  editName: boolean = false
  newName?: string
  created() {
    this.user = JSON.parse(JSON.stringify(this.$auth.user))
    this.newName = this.user.displayName
  }

  reset() {
    this.editName = false
    this.user = this.$auth.user
  }

  rename() {
    if (this.newName === '' || this.newName === this.user.displayName) return
    this.$axios
      .$put('/users/me', { displayName: this.newName })
      .then((user) => {
        this.editName = false
        this.$auth.setUser(user)
        this.user = JSON.parse(JSON.stringify(this.$auth.user))
        this.newName = JSON.parse(JSON.stringify(user.displayName))
      })
  }
}
</script>

<style scoped>
a.block:hover {
  color: #1b7340;
  cursor: default;
}
</style>
