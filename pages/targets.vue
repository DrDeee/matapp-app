<template>
  <div>
    <Page title="Personen">
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
            <div class="title is-6 mb-2">Person eintragen</div>
            <div class="columns mt-1">
              <div class="column">
                <b-field label="Name*" label-position="on-border">
                  <b-input
                    v-model="name"
                    size="is-small"
                    placeholder="Der Name..."
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field label="Ortsgruppe" label-position="on-border">
                  <b-input
                    v-model="localGroup"
                    size="is-small"
                    placeholder="Die Ortsgruppe..."
                  />
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Telefonnummer" label-position="on-border">
                  <b-input
                    v-model="phoneNumber"
                    size="is-small"
                    placeholder="Die Telefonnummer (für WhatsApp und Signal)..."
                  />
                  <template #message>
                    <div v-if="!isValidPhoneNumber">
                      *ungültige Telefonnummer
                    </div>
                  </template>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Matrix" label-position="on-border">
                  <b-input
                    v-model="matrix"
                    size="is-small"
                    placeholder="Die Matrix-ID..."
                  />
                  <template #message>
                    <div v-if="!isValidMatrixId">*ungültige Matrix-ID</div>
                  </template>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Telegram" label-position="on-border">
                  <b-input
                    v-model="telegram"
                    size="is-small"
                    placeholder="Der Telegram-Username..."
                  />
                  <template #message>
                    <div v-if="!isValidTelegramUsername">*ungültiger Name</div>
                  </template>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Discord" label-position="on-border">
                  <b-input
                    v-model="discord"
                    size="is-small"
                    placeholder="Die Discord User-ID..."
                  />
                  <template #message>
                    <div v-if="!isValidDiscordId">*ungültige Discord-ID</div>
                  </template>
                </b-field>
              </div>
            </div>
          </div>
          <div class="is-flex">
            <div class="mouse" @click="reset()">
              <b-icon icon="ban" type="is-danger" size="is-small" />
            </div>
            <div :class="{ mouse: isAllValid }" @click="create()">
              <b-icon
                icon="check"
                :type="isAllValid ? 'is-success' : 'is-dark'"
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
          <div class="columns">
            <div class="column">
              <b-field label="Name" label-position="on-border">
                <b-input v-model="nameFilter" expanded size="is-small" />
              </b-field>
              <b-field label="Telefonnummer" label-position="on-border">
                <b-input v-model="phoneNumberFilter" expanded size="is-small" />
              </b-field>
              <b-field label="Telegram" label-position="on-border">
                <b-input v-model="telegramFilter" expanded size="is-small" />
              </b-field>
            </div>
            <div class="column">
              <b-field label="Ortsgruppe" label-position="on-border">
                <b-input v-model="localGroupFilter" expanded size="is-small" />
              </b-field>
              <b-field label="Matrix-ID" label-position="on-border">
                <b-input v-model="matrixFilter" expanded size="is-small" />
              </b-field>
              <b-field label="Discord-ID" label-position="on-border">
                <b-input v-model="discordFilter" expanded size="is-small" />
              </b-field>
            </div>
          </div>
          <div v-if="filtered !== 0" class="has-text-centered">
            {{ targets.length }} / {{ targets.length + filtered }}
          </div>
        </b-message>
      </b-collapse>
      <target v-for="target in targets" :key="target.id" :target="target" />
      <div v-if="targets.length === 0" class="has-text-centered p-6">
        <div v-if="filtered === 0">
          Es wurde noch kein Mensch eingetragen :(
        </div>
        <div v-else>Keine Ergebnisse :(</div>
      </div>
    </Page>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { validators, dataGetter } from '~/src/target'

@Component
export default class TargetsPage extends Vue {
  get targets() {
    return (this.$store.state.targets.all as any[])
      .filter(
        (target) =>
          target.name.includes(this.nameFilter) &&
          (!target.localGroup ||
            target.localGroup
              .toLowerCase()
              .includes(this.localGroupFilter.toLowerCase())) &&
          (!target.phoneNumber ||
            target.phoneNumber
              .toLowerCase()
              .includes(this.phoneNumberFilter.toLowerCase())) &&
          (!target.matrix ||
            target.matrix
              .toLowerCase()
              .includes(this.matrixFilter.toLowerCase())) &&
          (!target.telegram ||
            target.telegram
              .toLowerCase()
              .includes(this.telegramFilter.toLowerCase())) &&
          (!target.discord ||
            target.discord.toLowerCase().includes(this.discord.toLowerCase()))
      )
      .sort((a, b) => {
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        else return 0
      })
  }

  filterOpen: boolean = false
  nameFilter: string = ''
  localGroupFilter: string = ''
  phoneNumberFilter: string = ''
  matrixFilter: string = ''
  telegramFilter: string = ''
  discordFilter: string = ''

  add: boolean = false
  name: string = ''
  localGroup: string = ''
  phoneNumber: string = ''
  matrix: string = ''
  telegram: string = ''
  discord: string = ''

  get isValidPhoneNumber() {
    return validators.phone(this.phoneNumber)
  }

  get isValidMatrixId() {
    return validators.matrix(this.matrix)
  }

  get isValidTelegramUsername() {
    return validators.telegram(this.telegram)
  }

  get isValidDiscordId() {
    return validators.discord(this.discord)
  }

  get isAllValid() {
    return (
      this.name !== '' &&
      this.isValidPhoneNumber &&
      this.isValidDiscordId &&
      this.isValidMatrixId &&
      this.isValidTelegramUsername
    )
  }

  get filtered() {
    return this.$store.state.targets.all.length - this.targets.length
  }

  get content() {
    return {
      name: this.name,
      localGroup: this.localGroup || undefined,
      phoneNumber: this.isValidPhoneNumber
        ? this.phoneNumber !== ''
          ? dataGetter.phone(this.phoneNumber)
          : undefined
        : undefined,
      matrix: this.isValidMatrixId
        ? this.matrix !== ''
          ? dataGetter.matrix(this.matrix)
          : undefined
        : undefined,
      telegram: this.isValidTelegramUsername
        ? this.telegram !== ''
          ? dataGetter.telegram(this.telegram)
          : undefined
        : undefined,
      discord: this.isValidDiscordId
        ? this.discord !== ''
          ? dataGetter.discord(this.discord)
          : undefined
        : undefined,
    }
  }

  created() {
    this.$store.dispatch('targets/loadAll')
  }

  resetFilters() {
    this.nameFilter = ''
    this.localGroupFilter = ''
    this.phoneNumberFilter = ''
    this.matrixFilter = ''
    this.telegramFilter = ''
    this.discordFilter = ''
  }

  reset() {
    this.add = false
    this.localGroup = ''
    this.name = ''
    this.phoneNumber = ''
    this.matrix = ''
    this.telegram = ''
    this.discord = ''
  }

  create() {
    if (this.name === '') return
    this.$store.dispatch('targets/create', this.content).then(() => {
      this.reset()
    })
  }
}
</script>

<style>
.mouse:hover {
  cursor: pointer;
}

.invisible {
  visibility: hidden;
}
</style>
