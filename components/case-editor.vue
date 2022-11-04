<template>
  <div>
    <b-field label="Kurze Beschreibung*" label-position="on-border" class="mb-5">
      <b-input v-model="description" size="is-small" expanded has-counter maxlength="100" />
      <template #message>
        <div class="has-text-centered help">
          Kurze Beschreibung für die Anzeige in der MAT App.
        </div>
      </template>
    </b-field>
    <b-field label="Person*" label-position="on-border" class="mb-5">
      <b-select
        v-model="target"
        expanded
        placeholder="Wähle die Person aus..."
        size="is-small"
      >
        <option v-for="t in targets" :key="t.id" :value="t.id">
          {{ t.name + (t.localGroup ? ` (${t.localGroup})` : '') }}
        </option>
      </b-select>
      <template #message>
        <div class="has-text-centered help">
          Die Person, gegen diese hier vorgegangen werden muss(te).
        </div>
      </template>
    </b-field>
    <b-field label="Art der Maßnahme*" label-position="on-border" class="mb-5">
      <b-select
        v-model="type"
        expanded
        placeholder="Wähle die Art aus..."
        size="is-small"
      >
        <option value="warn">Offizielle Verwarnung</option>
        <option value="ban">Ausschluss</option>
      </b-select>
      <template #message>
        <div class="has-text-centered help">
          Die Art der Maßnahme, die gegen die Person ergriffen wurde bzw. wird.
        </div>
      </template>
    </b-field>
    <b-field label="Chat*" label-position="on-border" class="mb-5">
      <b-select
        v-model="location"
        expanded
        placeholder="Wähle den Chat aus..."
        size="is-small"
      >
        <optgroup v-for="m in chats" :key="m[0]" :label="m[0].toUpperCase()">
          <option v-for="c in m[1]" :key="c[0]" :value="c[0]">
            {{ c[1] }}
          </option>
        </optgroup>
      </b-select>
      <template #message>
        <div class="has-text-centered help">
          Gebe an, in welcher Gruppe die Person getan hat, was Eingreifen
          erfordert (hat).
        </div>
      </template>
    </b-field>
    <b-field label="Kommunikator:in*" label-position="on-border" class="mb-5">
      <b-select
        v-model="annunciator"
        expanded
        placeholder="Wähle das MAT-Mitglied aus..."
        size="is-small"
      >
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.name }}
        </option>
      </b-select>
      <template #message>
        <div class="has-text-centered help">
          Mit <em>Kommunikator:in</em> ist das MAT-Mitglied gemeint, welches die
          Person von der Maßnahme unterrichtet.
        </div>
      </template>
    </b-field>
    <b-field label="Ausführende:r*" label-position="on-border" class="mb-5">
      <b-select
        v-model="executor"
        expanded
        placeholder="Wähle das MAT-Mitglied aus..."
        size="is-small"
      >
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.name }}
        </option>
      </b-select>
      <template #message>
        <div class="has-text-centered help">
          Wähle hier aus, welches MAT-Mitglied die Maßnahme durchführt, also zum
          Beispiel die Person aus der Gruppe entfernt.
        </div>
      </template>
    </b-field>
    <b-field label="Grund*" label-position="on-border" class="mb-5">
      <b-input
        v-model="reason"
        type="textarea"
        expanded
        placeholder="Schreibe hier den Grund für eure Maßnahme..."
        size="is-small"
      />
      <template #message>
        <div class="has-text-centered help">
          Begründe hier, warum du bzw. warum ihr euch für diese Maßnahme
          entschieden habt, und was der Grund für diese war.
        </div>
      </template>
    </b-field>
    <b-field label="Start*" label-position="on-border" class="mb-5">
      <b-datetimepicker
        v-model="startDate"
        size="is-small"
        expanded
        :first-day-of-week="1"
        :timepicker="{ 'increment-minutes': 15, 'default-minutes': 0 }"
      />
      <template #message>
        <div class="has-text-centered help">
          Gebe hier an, zu welchem Zeitpunkt die Maßnahme (ge)startet (hat).
        </div>
      </template>
    </b-field>
    <b-collapse :open="type === 'ban'">
      <b-field label="Ende" label-position="on-border" class="mb-5">
        <b-datetimepicker
          v-model="endDate"
          size="is-small"
          expanded
          :first-day-of-week="1"
          :timepicker="{ 'increment-minutes': 15, 'default-minutes': 0 }"
        />
        <template #message>
          <div class="has-text-centered help">
            Begründe hier, für wie lange die Person aus der Gruppe
            ausgeschlossen ist.
          </div>
        </template>
      </b-field></b-collapse
    >
    <b-field label="Notitzen" label-position="on-border">
      <b-input
        v-model="notes"
        type="textarea"
        expanded
        placeholder="Platz für Notitzen..."
        size="is-small"
      />
    </b-field>
    <b-field label="Abstimmungsergebnis">
      <b-checkbox v-model="saveVoting" size="is-small">
        Abstimmungsergebnis speichern
      </b-checkbox>
    </b-field>
    <b-collapse animation="slide" :open="saveVoting" class="mb-5">
      <b-field>
        <b-numberinput
          v-model="votePlus"
          :max="10"
          :min="0"
          size="is-small"
          class="mx-1"
        ></b-numberinput>
        <b-numberinput
          v-model="voteNull"
          size="is-small"
          :max="10"
          :min="0"
          class="mx-1"
        ></b-numberinput>
        <b-numberinput
          v-model="voteMinus"
          size="is-small"
          :max="10"
          :min="0"
          class="mx-1"
        ></b-numberinput>
        <template #message>
          <div v-if="usedVotes > 10" class="help has-text-centered">
            Es sind maximal nur 10 Stimmen möglich.
          </div>
        </template>
      </b-field>
    </b-collapse>
    <b-button
      v-if="!acase.id"
      type="is-primary"
      size="is-small"
      expanded
      :disabled="!isReady"
      @click="create()"
      >Erstellen</b-button
    >
    <div v-else class="columns">
      <div class="column">
        <b-button
          expanded
          type="is-primary"
          size="is-small"
          @click="$router.push('/cases#' + acase.id)"
          >Abbrechen</b-button
        >
      </div>
      <div class="column">
        <b-button
          expanded
          type="is-primary"
          size="is-small"
          :disabled="!isUpdateReady"
          @click="update()"
          >Speichern</b-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { alphabetic } from '~/src/util'

function getNextQuarterDate() {
  const date = new Date()
  const min = date.getMinutes()
  const step =
    min > 45 ? 60 - min : min > 30 ? 45 - min : min > 15 ? 30 - min : 15 - min
  date.setMinutes(min + step)
  date.setMilliseconds(0)
  date.setSeconds(0)
  return date
}

const requiredFields: string[] = [
  'description',
  'target',
  'type',
  'location',
  'annunciator',
  'executor',
  'reason',
  'startDate',
]

@Component
export default class CaseEditor extends Vue {
  @Prop({ required: false, default: () => ({}) })
  acase!: any

  target: string | null = null
  type: string | null = null
  description: string | null = null
  location: string | null = null
  annunciator: string | null = null
  executor: string | null = null
  reason: string | null = null
  startDate: Date = getNextQuarterDate()
  endDate: Date | null = null
  notes: string | null = null
  votePlus: number = 0
  voteNull: number = 0
  voteMinus: number = 0

  saveVoting: boolean = false

  get targets() {
    return (this.$store.state.targets.all as any[])
      .filter(() => true)
      .sort(alphabetic('name'))
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

  get users() {
    return (this.$store.state.users.all as any[])
      .map((user) => ({
        id: user.id,
        name: user.displayName || user.userName,
      }))
      .sort(alphabetic('name'))
  }

  get content() {
    return JSON.parse(
      JSON.stringify({
        target: this.target || undefined,
        type: this.type || undefined,
        description: this.description || undefined,
        location: this.location || undefined,
        annunciator: this.annunciator || undefined,
        executor: this.executor || undefined,
        reason: this.reason || undefined,
        startDate: this.startDate ? this.startDate.getTime() : undefined,
        endDate: this.endDate ? this.endDate.getTime() : undefined,
        notes: this.notes || null,
        voting: this.saveVoting
          ? `${this.votePlus}/${this.voteNull}/${this.voteMinus}`
          : null,
      })
    )
  }

  get updateContent() {
    const content: { [key: string]: string } = {}
    Object.keys(this.content).forEach((key) => {
      let value
      switch (key) {
        case 'target':
          value = this.acase.target.id
          break
        case 'startDate':
        case 'endDate':
          value = this.acase[key].getTime()
          break
        case 'voting':
          value = this.acase[key]
            ? `${this.acase[key]['+']}/${this.acase[key]['0']}/${this.acase[key]['-']}`
            : null
          break
        default:
          value = this.acase[key]
      }
      if (this.content[key] !== value) content[key] = this.content[key]
    })
    return content
  }

  get isReady() {
    if (this.saveVoting && this.usedVotes > 10) return false
    for (const key of requiredFields) {
      if (!this.content[key]) return false
    }
    return true
  }

  get isUpdateReady() {
    return this.isReady && Object.keys(this.updateContent).length !== 0
  }

  get usedVotes() {
    return this.votePlus + this.voteNull + this.voteMinus
  }

  created() {
    this.$store.dispatch('users/loadAll')
    this.$store.dispatch('targets/loadAll')
    this.$store.dispatch('chats/loadAll')
    if (this.acase.id) {
      Object.assign(this, this.acase, {
        target: this.acase.target.id,
        voting: undefined,
      })
      this.saveVoting = !(
        this.acase.voting === undefined || this.acase.voting === null
      )
      if (this.acase.voting) {
        this.votePlus = this.acase.voting['+']
        this.voteNull = this.acase.voting['0']
        this.voteMinus = this.acase.voting['-']
      }
    }
  }

  async create() {
    await this.$store.dispatch('cases/create', this.content)
    this.$router.push('/')
  }

  async update() {
    await this.$store.dispatch(
      'cases/update',
      Object.assign({ id: this.acase.id }, this.updateContent)
    )
    this.$router.push('/#' + this.acase.id)
  }
}
</script>
