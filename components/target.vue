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
        {{ target.name }}
      </div>
      <b-input
        v-else
        v-model="newName"
        placeholder="Der Name des Menschen..."
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
        <b-icon
          icon="check"
          :type="newName === '' ? 'is-dark' : 'is-success'"
          size="is-small"
        />
      </div>
    </div>
    <b-collapse animation="slide" :open="open">
      <div class="card-content p-2 px-5 pt-4">
        <SocialEntry
          v-model="target.localGroup"
          message=""
          :target-id="target.id"
          validator="localGroup"
          label="Ortsgruppe"
        />
        <div class="columns mt-2">
          <div class="column">
            <SocialEntry
              v-model="target.phoneNumber"
              message="*ungültige Telefonnummer"
              :target-id="target.id"
              validator="phone"
              label="Telefonnummer"
            />
          </div>
          <div class="column">
            <SocialEntry
              v-model="target.matrix"
              message="*ungültige Matrix-ID"
              :target-id="target.id"
              validator="matrix"
              label="Matrix-ID"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <SocialEntry
              v-model="target.telegram"
              message="*ungültiger Telegramname"
              :target-id="target.id"
              validator="telegram"
              label="Telegram"
            />
          </div>
          <div class="column">
            <SocialEntry
              v-model="target.discord"
              message="*ungültige DIscord-ID"
              :target-id="target.id"
              validator="discord"
              label="Discord"
            />
          </div>
        </div>
        <div class="mt-3">
          <b-collapse v-model="notesOpen" class="card">
            <template #trigger="props">
              <div class="card-header p-0">
                <div class="card-header-icon p-3 px-4">
                  <b-icon
                    :icon="props.open ? 'chevron-up' : 'chevron-down'"
                    size="is-small"
                  />
                </div>
                <div class="card-header-title p-3">
                  <div class="is-flex is-align-items-center">
                    <div>Notizen</div>
                    <div class="ml-1">
                      
                    </div>
                  </div>
                </div>
                <div class="card-header-icon p-3 px-4">
                  <b-tag type="is-primary">{{ target.notes.length }}</b-tag>
                </div>
              </div>
            </template>
            <div class="card-content p-3">
              <div
                v-for="note in target.notes"
                :key="target.notes.indexOf(note)"
                class="is-flex is-justify-content-space-between box p-4 mb-2"
              >
                <div
                  style="width: 100%"
                  v-html="
                    note
                      .replaceAll('<', '&gt;')
                      .replaceAll('>', '&lt;')
                      .replaceAll('\n', '<br />')
                  "
                ></div>
                <div
                  class="ml-2 mouse"
                  @click="removeNote(target.notes.indexOf(note))"
                >
                  <b-icon icon="trash" type="is-danger" size="is-small" />
                </div>
              </div>
              <div
                v-if="target.notes.length === 0"
                class="has-text-centered p-3"
              >
                Keine Notitzen
              </div>
              <div class="mt-3 mb-2">
                <b-field label="Neue Notitz" label-position="on-border">
                  <b-input v-model="newNote" size="is-small" type="textarea" />
                </b-field>
              </div>
              <b-button
                size="is-small"
                type="is-primary"
                :disabled="newNote === ''"
                expanded
                @click="addNote()"
              >
                Notitz speichern
              </b-button>
            </div>
          </b-collapse>
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
export default class TargetComponent extends Vue {
  @Prop({ required: true })
  target!: any

  editName: boolean = false
  newName: string = this.target.name

  isDeleting: boolean = false

  newNote: string = ''

  open: boolean = false
  notesOpen: boolean = this.target.notes.length !== 0

  cancelNameEdit() {
    this.newName = this.target.name
    this.editName = false
  }

  saveNewName() {
    if (this.newName === '') return
    if (this.newName === this.target.name) {
      this.editName = false
    } else {
      this.$store
        .dispatch('targets/update', {
          id: this.target.id,
          name: this.newName,
        })
        .then(() => {
          this.editName = false
          this.newName = this.target.name
        })
    }
  }

  deleteChat() {
    this.$store.dispatch('targets/delete', this.target.id)
  }

  addNote() {
    this.$store
      .dispatch('targets/addNote', {
        targetId: this.target.id,
        note: this.newNote,
      })
      .then(() => {
        this.newNote = ''
      })
  }

  removeNote(index: number) {
    this.$store.dispatch('targets/removeNote', {
      targetId: this.target.id,
      noteIndex: index,
    })
  }
}
</script>

<style scoped>
div.card-header-icon.blocked:hover {
  cursor: default;
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
