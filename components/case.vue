<template>
  <div :id="myCase.id" class="card mb-3">
    <div
      class="card-header is-flex p-3 px-5 is-justify-content-space-between"
      :class="{ 'is-clickable': !slim && !forceOpen }"
      @click="open = slim || !open"
    >
      <div class="is-flex is-align-items-center" >
        <b-icon
          v-if="!slim || !forceOpen"
          :icon="open ? 'chevron-up' : 'chevron-down'"
          size="is-small"
        />
        <div class="ml-4">{{ myCase.description }} | {{ targetName }}</div>
      </div>

      <div class="is-flex is-align-items-center">
        <div class="mr-4">
          {{ myCase.type === 'warn' ? 'Verwarnung' : 'Ausschluss' }}
        </div>
        <b-icon
          type="is-danger"
          :icon="myCase.type === 'warn' ? 'warning' : 'ban'"
        />
      </div>
    </div>
    <b-collapse animation="slide" :open="open || forceOpen">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <b-field label="Art der Maßnahme" label-position="on-border">
              <b-input
                :value="myCase.type === 'ban' ? 'Ausschluss' : 'Verwarnung'"
                expanded
                disabled
                size="is-small"
              />
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Kurze Beschreibung" label-position="on-border">
              <b-input
                :value="myCase.description"
                expanded
                disabled
                size="is-small"
              />
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Person" label-position="on-border">
              <b-input :value="targetName" expanded disabled size="is-small" />
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Plattform" label-position="on-border">
              <b-input
                :value="
                  chat.messenger[0].toUpperCase() + chat.messenger.slice(1)
                "
                expanded
                disabled
                size="is-small"
              />
            </b-field>
          </div>
          <div v-if="!slim" class="column">
            <b-field label="Chat" label-position="on-border">
              <b-input :value="chat.name" expanded disabled size="is-small" />
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div v-if="!slim" class="column">
            <b-field label="Kommunikator:in" label-position="on-border">
              <b-input
                :value="
                  annunciator.displayName
                    ? annunciator.displayName
                    : annunciator.userName
                "
                expanded
                disabled
                size="is-small"
              />
            </b-field>
          </div>
          <div v-if="!slim" class="column">
            <b-field label="Exekutor:in" label-position="on-border">
              <b-input
                :value="
                  executor.displayName
                    ? executor.displayName
                    : executor.userName
                "
                expanded
                disabled
                size="is-small"
              />
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Start" label-position="on-border">
              <b-datetimepicker
                :value="myCase.startDate"
                expanded
                disabled
                size="is-small"
              />
            </b-field>
          </div>
          <div v-if="myCase.endDate" class="column">
            <b-field label="Ende" label-position="on-border">
              <b-datetimepicker
                :value="myCase.endDate"
                expanded
                disabled
                placeholder="keine Endzeit"
                size="is-small"
              />
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div v-if="myCase.reason" class="column">
            <b-field label="Grund" label-position="on-border">
              <b-input
                :value="myCase.reason"
                type="textarea"
                size="is-small"
                disabled
              />
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div v-if="myCase.notes" class="column">
            <b-field label="Notitzen" label-position="on-border">
              <b-input
                :value="myCase.notes"
                type="textarea"
                size="is-small"
                disabled
              />
            </b-field>
          </div>
        </div>

        <div v-if="myCase.voting" class="columns">
          <div class="column">
            <b-field label="Dafür" label-position="on-border">
              <b-input :value="myCase.voting['+']" size="is-small" disabled />
            </b-field>
          </div>
          <div class="column">
            <b-field label="Enthaltung" label-position="on-border">
              <b-input :value="myCase.voting['0']" size="is-small" disabled />
            </b-field>
          </div>
          <div class="column">
            <b-field label="Gegen" label-position="on-border">
              <b-input :value="myCase.voting['-']" size="is-small" disabled />
            </b-field>
          </div>
        </div>
        <!--         <div class="columns">
          <div class="column">
            <attachments :attachments="myCase.attachments" :case-id="myCase.id" />
          </div>
        </div> -->
      </div>
      <div v-if="!slim" class="card-footer">
        <a
          class="card-footer-item"
          @click="$router.push('/cases/edit?id=' + myCase.id)"
        >
          <b-icon icon="edit" size="is-small" type="is-dark" />
        </a>
        <a
          class="card-footer-item"
          @click="$router.push('/cases/delete?id=' + myCase.id)"
        >
          <b-icon icon="trash" size="is-small" type="is-dark" />
        </a>
      </div>
      <slot name="bottom" />
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CaseComponent extends Vue {
  @Prop({ required: true })
  myCase!: any

  @Prop({ required: false, default: false })
  forceOpen!: boolean

  @Prop({ required: false, default: () => false })
  slim!: boolean

  open: boolean = this.slim || false

  get target() {
    return (
      this.$store.state.targets.all.find(
        (t: any) => t.id === this.myCase.target.id
      ) || this.myCase.target
    )
  }

  get targetName() {
    if (!this.target) return ''
    return (
      this.target.name +
      (this.target.localGroup ? ` (${this.target.localGroup})` : '')
    )
  }

  get annunciator() {
    return this.$store.state.users.all.find(
      (t: any) => t.id === this.myCase.annunciator
    )
  }

  get executor() {
    return this.$store.state.users.all.find(
      (t: any) => t.id === this.myCase.executor
    )
  }

  get chat() {
    return this.$store.state.chats.all.find(
      (c: any) => c.id === this.myCase.location
    )
  }
}
</script>
