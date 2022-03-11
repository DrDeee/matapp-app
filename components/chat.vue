<template>
  <div class="card mb-2">
    <div class="card-header">
      <div class="card-header-icon" @click="open = !open">
        <b-icon size="is-small" :icon="open ? 'chevron-up' : 'chevron-down'" />
      </div>
      <div
        v-if="!editName"
        class="card-header-title mouse"
        @click="open = !open"
      >
        {{ chat.name }}
      </div>
      <b-input
        v-else
        v-model="newName"
        placeholder="Der Name des Chats..."
        expanded
        class="card-header-title p-0 pl-1"
      ></b-input>
      <div v-if="!editName" class="card-header-icon" @click="editName = true">
        <b-icon icon="edit" size="is-small" />
      </div>
      <div
        v-if="editName"
        class="card-header-icon pr-0 mr-1"
        @click="cancelNameEdit()"
      >
        <b-icon icon="ban" type="is-danger" size="is-small" />
      </div>
      <div
        v-if="editName"
        class="card-header-icon pl-0"
        :class="{ blocked: newName === '' }"
        @click="saveNewName()"
      >
        <b-icon icon="check" type="is-success" size="is-small" />
      </div>
    </div>
    <b-collapse animation="slide" :open="open">
      <div class="card-content p-2 px-5">
        <div class="columns">
          <div class="column">
            <div class="first-letter is-flex is-align-items-center">
              <b-icon
                :pack="messengerIcon.pack"
                :icon="messengerIcon.icon"
                size="is-small"
                class="mr-2"
                :class="{ invisible: false }"
              />
              {{ chat.messenger }}
            </div>
            <div v-if="!editLink && chat.inviteUrl">
              <div
                v-if="isUrl(chat.inviteUrl)"
                class="is-flex is-align-items-center"
              >
                <b-icon size="is-small" icon="link" class="mr-1" />
                <a class="mr-1 ml-1" :href="chat.inviteUrl" target="_blank">{{
                  isUrl(chat.inviteUrl).hostname
                }}</a>
                (<a @click="editLink = true">bearbeiten</a>)
              </div>
              <div v-else class="is-flex is-align-items-center">
                <b-icon size="is-small" icon="link" class="mr-2" />
                {{ chat.inviteUrl }} (<a @click="editLink = true">bearbeiten</a
                >)
              </div>
            </div>
            <div v-else-if="!editLink" class="is-flex is-align-items-center">
              <b-icon size="is-small" icon="link" class="mr-2" />
              <a @click="editLink = true"><em>Link hinzufügen</em></a>
            </div>
            <div v-else class="is-flex is-justify-content-space-between mt-1">
              <div style="width: 100%" class="mr-3">
                <b-input
                  v-model="newLink"
                  placeholder="Einladungslink oder Text..."
                  expanded
                  size="is-small"
                />
              </div>
              <div class="is-flex is-align-items-center">
                <div class="mr-2 mouse" @click="cancelLinkEdit()">
                  <b-icon icon="ban" type="is-danger" size="is-small" />
                </div>
                <div
                  :class="{ mouse: newLink !== '', block: newLink === '' }"
                  @click="saveNewLink()"
                >
                  <b-icon icon="check" type="is-success" size="is-small" />
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="title is-6 mb-1">Moderation</div>
            <div class="pl-2">
              <div
                v-for="member in chat.members"
                :key="member.id"
                class="is-flex is-justify-content-space-between is-align-items-center"
              >
                <div>
                  {{
                    member.displayName ? member.displayName : member.userName
                  }}
                </div>
                <div class="mouse" @click="removeUser(member.id)">
                  <b-icon icon="trash" type="is-danger" size="is-small" />
                </div>
              </div>
              <div v-if="chat.members.length == 0" class="has-text-centered">
                Keine Moderator:innen :(
              </div>
              <div class="mt-3">
                <b-select
                  size="is-small"
                  placeholder="Moderator:in hinzufügen"
                  expanded
                  @input="addUser($event)"
                >
                  <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.displayName ? user.displayName : user.userName }}
                  </option>
                  <option v-if="users.length === 0" disabled>
                    Keine weiteren Moderator:innen
                  </option>
                </b-select>
              </div>
            </div>
          </div>
        </div>
        <div class="is-flex is-justify-content-center mt-3 mb-0">
          <div v-if="!isDeleting" class="mouse" @click="isDeleting = true">
            <b-icon icon="trash" size="is-small" type="is-danger" />
          </div>
          <div v-if="isDeleting" class="mouse mr-1" @click="isDeleting = false">
            <b-icon icon="ban" size="is-small" type="is-danger" />
          </div>
          <div v-if="isDeleting" class="mouse ml-1" @click="deleteChat()">
            <b-icon icon="check" size="is-small" type="is-success" />
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ChatComponent extends Vue {
  @Prop({ required: true })
  chat!: any

  editName: boolean = false
  newName: string = this.chat.name

  editLink: boolean = false
  newLink: string = this.chat.inviteUrl || ''

  isDeleting: boolean = false

  open: boolean = false

  get messengerIcon() {
    switch (this.chat.messenger) {
      case 'matrix':
      case 'signal':
        return { pack: 'fas', icon: 'lock', invisible: true }
      default:
        return { pack: 'fab', icon: this.chat.messenger }
    }
  }

  get users() {
    return this.$store.state.users.all.filter(
      (u: any) => !(this.chat.members as any[]).map((m) => m.id).includes(u.id)
    )
  }

  isUrl(url: string) {
    try {
      return new URL(url)
    } catch (e) {
      return false
    }
  }

  cancelNameEdit() {
    this.newName = this.chat.name
    this.editName = false
  }

  cancelLinkEdit() {
    this.newLink = this.chat.inviteUrl || ''
    this.editLink = false
  }

  saveNewName() {
    if (this.newName === '') return
    if (this.newName === this.chat.name) {
      this.editName = false
    } else {
      this.$store
        .dispatch('chats/update', {
          id: this.chat.id,
          name: this.newName,
        })
        .then(() => {
          this.editName = false
          this.newName = this.chat.name
        })
    }
  }

  saveNewLink() {
    if (this.newLink === '') return
    if (this.newLink === this.chat.inviteUrl) {
      this.editLink = false
    } else {
      this.$store
        .dispatch('chats/update', {
          id: this.chat.id,
          inviteUrl: this.newLink,
        })
        .then(() => {
          this.editLink = false
          this.newLink = this.chat.inviteUrl
        })
    }
  }

  deleteChat() {
    this.$store.dispatch('chats/delete', this.chat.id)
  }

  addUser(userId: string) {
    this.$store.dispatch('chats/addUser', { chatId: this.chat.id, userId })
  }

  removeUser(userId: string) {
    this.$store.dispatch('chats/removeUser', { chatId: this.chat.id, userId })
  }
}
</script>

<style scoped>
div.card-header-icon.blocked:hover {
  cursor: not-allowed;
}

.first-letter {
  text-transform: capitalize;
}

.block:hover {
  cursor: not-allowed;
}

.mouse:hover {
  cursor: pointer;
}

.invisible {
  visibility: hidden;
}
</style>
