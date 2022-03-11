<template>
  <div>
    <Page title="Awarenessvorfälle">
      <template #end>
        <div
          class="card-header-icon mr-0 pr-1"
          @click="$router.push('/cases/new')"
        >
          <b-icon icon="plus" size="is-small" />
        </div>
        <div class="card-header-icon" @click="filterOpen = !filterOpen">
          <b-icon
            icon="filter"
            size="is-small"
            :type="filtered === 0 ? 'is-dark' : 'is-success'"
          />
        </div>
      </template>
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
          <b-field label="Person" label-position="on-border">
            <b-select v-model="targetFilter" expanded size="is-small">
              <option v-for="t in targets" :key="t.id" :value="t.id">
                {{ t.name }}
              </option>
            </b-select>
          </b-field>
          <div class="columns">
            <div class="column">
              <b-field label="Typ" label-position="on-border">
                <b-select v-model="typeFilter" expanded size="is-small">
                  <option value="warn">Verwarnung</option>
                  <option value="ban">Bann</option>
                </b-select>
              </b-field>
              <b-field label="Kommunikator:in" label-position="on-border">
                <b-select v-model="annunciatorFilter" expanded size="is-small">
                  <option v-for="u in users" :key="u.id" :value="u.id">
                    {{ u.displayName || u.userName }}
                  </option>
                </b-select>
              </b-field>
              <b-field label="Begründung" label-position="on-border">
                <b-input v-model="reasonFilter" expanded size="is-small" />
              </b-field>
            </div>
            <div class="column">
              <b-field label="Chat" label-position="on-border">
                <b-select v-model="locationFilter" expanded size="is-small">
                  <optgroup
                    v-for="m in chats"
                    :key="m[0]"
                    :label="m[0].toUpperCase()"
                  >
                    <option v-for="c in m[1]" :key="c[0]" :value="c[0]">
                      {{ c[1] }}
                    </option>
                  </optgroup>
                </b-select>
              </b-field>
              <b-field label="Exekutor:in" label-position="on-border">
                <b-select v-model="executorFilter" expanded size="is-small">
                  <option v-for="u in users" :key="u.id" :value="u.id">
                    {{ u.displayName || u.userName }}
                  </option>
                </b-select>
              </b-field>
              <b-field label="Notitzen" label-position="on-border">
                <b-input v-model="notesFilter" expanded size="is-small" />
              </b-field>
            </div>
          </div>
          <div v-if="filtered !== 0" class="has-text-centered">
            {{ cases.length }} / {{ cases.length + filtered }}
          </div>
        </b-message>
      </b-collapse>
      <Case v-for="c in cases" :key="c.id" :my-case="c" />
      <div v-if="cases.length === 0" class="has-text-centered p-6">
        <div v-if="filtered === 0">
          Es wurde noch kein Awarenessvorfall eingetragen :)
        </div>
        <div v-else>Keine Ergebnisse :(</div>
      </div>
    </Page>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { alphabetic } from '~/src/util'

@Component
export default class CasesPage extends Vue {
  get cases() {
    return (this.$store.state.cases.all as any[])
      .filter((c) => {
        return (
          (this.targetFilter === '' || c.target.id === this.targetFilter) &&
          (this.typeFilter === '' || this.typeFilter === c.type) &&
          (this.locationFilter === '' || this.locationFilter === c.location) &&
          (this.annunciatorFilter === '' ||
            this.annunciatorFilter === c.annunciator) &&
          (this.executorFilter === '' || this.executorFilter === c.executor) &&
          (this.reasonFilter === '' ||
            c.reason.toLowerCase().includes(this.reasonFilter.toLowerCase())) &&
          (this.notesFilter === '' ||
            !c.notes ||
            c.notes.toLowerCase().includes(this.notesFilter.toLowerCase()))
        )
      })
      .sort((a, b) => {
        if (a.startDate > b.startDate) return 1
        else if (a.startDate < b.startDate) return -1
        else return 0
      })
      .reverse()
  }

  filterOpen: boolean = false
  targetFilter: string = ''
  typeFilter: string = ''
  locationFilter: string = ''
  annunciatorFilter: string = ''
  executorFilter: string = ''
  reasonFilter: string = ''
  notesFilter: string = ''

  get users() {
    return this.$store.state.users.all
  }

  get chats() {
    const chats: any[] = this.$store.state.chats.all
    const messengers: { [key: string]: any[] } = {}
    chats.forEach((c) => {
      if (!messengers[c.messenger]) messengers[c.messenger] = []
      messengers[c.messenger].push(c)
    })
    const ret: any[] = []

    Object.keys(messengers)
      .sort()
      .forEach((m) => {
        const cs: any[] = []
        messengers[m]
          .sort(alphabetic('name'))
          .forEach((c) => cs.push([c.id, c.name]))
        ret.push([m, cs])
      })

    return ret
  }

  get targets() {
    return (this.$store.state.targets.all as any[])
      .filter(() => true)
      .sort(alphabetic('name'))
  }

  get filtered() {
    return this.$store.state.cases.all.length - this.cases.length
  }

  async created() {
    await Promise.all([
      this.$store.dispatch('chats/loadAll'),
      this.$store.dispatch('targets/loadAll'),
      this.$store.dispatch('users/loadAll'),
    ])
    await this.$store.dispatch('cases/loadAll')
  }

  resetFilters() {
    this.targetFilter = ''
    this.typeFilter = ''
    this.locationFilter = ''
    this.annunciatorFilter = ''
    this.executorFilter = ''
    this.reasonFilter = ''
    this.notesFilter = ''
  }
}
</script>
<style scoped>
.invisible {
  visibility: hidden;
}
</style>
