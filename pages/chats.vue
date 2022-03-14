<template>
  <div>
    <Page title="Chats">
      <template #end>
        <div
          class="card-header-icon mr-0 pr-1"
          @click="add ? reset() : (add = !add)"
        >
          <b-icon :icon="add ? 'ban' : 'plus'" size="is-small" />
        </div>
        <div class="card-header-icon" @click="filterOpen = !filterOpen">
          <b-icon
            icon="filter"
            size="is-small"
            :type="filtered === 0 ? 'is-dark' : 'is-success'"
          />
        </div>
      </template>
      <b-collapse animation="fade" :open="add">
        <div
          class="box is-flex is-justify-content-space-between is-align-items-end mb-3"
        >
          <div style="width: 100%" class="mr-6">
            <div class="title is-6 mb-2">Chat eintragen</div>
            <b-field label="Gruppenname*" label-position="on-border">
              <b-input
                v-model="name"
                size="is-small"
                placeholder="Der Gruppenname..."
              />
            </b-field>
            <b-field label="Plattform*" label-position="on-border">
              <MessengerSelector v-model="messenger" />
            </b-field>
            <b-field label="Einladungslink" label-position="on-border">
              <b-input
                v-model="inviteUrl"
                size="is-small"
                placeholder="Der Einladungslink..."
              />
            </b-field>
            <b-field>
              <b-checkbox v-model="addAutomatic" size="is-small"
                >Mich automatisch als Moderator:in hinzufügen</b-checkbox
              >
            </b-field>
          </div>
          <div class="is-flex">
            <div class="mouse" @click="reset()">
              <b-icon icon="ban" type="is-danger" size="is-small" />
            </div>
            <div :class="{ mouse: name !== '' }" @click="create()">
              <b-icon
                icon="check"
                :type="name !== '' ? 'is-success' : 'is-dark'"
                size="is-small"
                class="ml-2"
              />
            </div>
          </div>
        </div>
      </b-collapse>
      <b-collapse animation="slide" :open="filterOpen">
        <b-message class="mb-2">
          <div class="is-flex is-justify-content-space-between mb-3">
            <div class="title is-6">Filter-Optionen</div>
            <a
              class="help mb-0"
              :class="{ invisible: filtered === 0 }"
              @click="resetFilters()"
              >Filter zurücksetzen</a
            >
          </div>
          <b-field label="Name" label-position="on-border">
            <b-input v-model="nameFilter" expanded size="is-small" />
          </b-field>
          <messenger-selector v-model="messengerFilter" />
          <div v-if="filtered !== 0" class="has-text-centered">
            {{ chats.length }} / {{ chats.length + filtered }}
          </div>
        </b-message>
      </b-collapse>
      <chat v-for="chat in chats" :key="chat.id" :chat="chat" />
      <div v-if="chats.length === 0" class="has-text-centered p-6">
        <div v-if="filtered === 0">Es wurde noch kein Chat eingetragen :(</div>
        <div v-else>Keine Chats gefunden :(</div>
      </div>
    </Page>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ChatsPage extends Vue {
  add: boolean = false
  name: string = ''
  messenger: string = 'whatsapp'
  inviteUrl: string = ''
  addAutomatic: boolean = true

  filterOpen: boolean = false
  nameFilter: string = ''
  messengerFilter: string = ''

  get chats() {
    return (this.$store.state.chats.all as any[])
      .filter(
        (c: any) =>
          c.name.toLowerCase().includes(this.nameFilter.toLowerCase()) &&
          (!this.messengerFilter || c.messenger === this.messengerFilter)
      )
      .sort((a, b) => {
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        else return 0
      })
  }

  get users() {
    return this.$store.state.users.all
  }

  get filtered() {
    return this.$store.state.chats.all.length - this.chats.length
  }

  get content() {
    return {
      name: this.name,
      messenger: this.messenger,
      inviteUrl: this.inviteUrl === '' ? undefined : this.inviteUrl,
    }
  }

  created() {
    this.$store.dispatch('chats/loadAll')
    this.$store.dispatch('users/loadAll')
  }

  reset() {
    this.add = false
    this.name = ''
    this.messenger = 'whatsapp'
    this.inviteUrl = ''
    this.addAutomatic = true
  }

  resetFilters() {
    this.nameFilter = ''
    this.messengerFilter = ''
  }

  create() {
    if (this.name === '') return
    this.$store.dispatch('chats/create', this.content).then((chat: any) => {
      if (this.addAutomatic)
        this.$store.dispatch('chats/addUser', {
          chatId: chat.id,
          userId: (this.$auth as any).user.id,
        })
      this.reset()
    })
  }
}
</script>

<style scoped>
.mouse:hover {
  cursor: pointer;
}

.invisible {
  visibility: hidden;
}
</style>
