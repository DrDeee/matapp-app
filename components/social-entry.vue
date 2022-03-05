<template>
  <div>
    <div class="is-flex is-align-items-center">
      <div style="width: 100%">
        <b-field :label="label" label-position="on-border">
          <b-input v-model="content" expanded size="is-small" :disabled="!edit"></b-input>
        </b-field>
      </div>
      <div class="ml-2 is-flex">
        <div v-if="!edit" class="mouse" @click="edit = true">
          <b-icon size="is-small" icon="edit" />
        </div>
        <div v-if="edit" class="mouse mr-2" @click="reset()">
          <b-icon size="is-small" type="is-danger" icon="ban" />
        </div>
        <div v-if="edit" :class="{ mouse: isValidAndNew }" @click="update()">
          <b-icon
            size="is-small"
            :type="isValidAndNew ? 'is-success' : 'is-dark'"
            icon="check"
          />
        </div>
      </div>
    </div>
    <div v-if="content && !isValid" class="has-text-right help mr-6">
      {{ message }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { fieldNames, dataGetter, validators } from '~/src/target'

@Component
export default class SocialEntry extends Vue {
  @Prop({ required: true })
  label!: string

  @Prop({ required: true })
  value!: string

  @Prop({ required: true })
  targetId!: string

  @Prop({ required: true })
  message!: string

  @Prop({
    required: true,
    validator(value: any) {
      if (typeof value !== 'string') return false
      return ['phone', 'discord', 'matrix', 'telegram', 'localGroup'].includes(value)
    },
  })
  validator!: string

  content = ''

  edit: boolean = false

  get isValid() {
    return validators[this.validator](this.content)
  }

  get isValidAndNew() {
    if (!this.isValid) return false
    const data = dataGetter[this.validator](this.content)
    if (data === this.value || (!data && !this.value)) return false
    return true
  }

  created() {
    this.content = this.value
  }

  reset() {
    this.edit = false
    this.content = this.value
  }

  update() {
    if (!this.isValidAndNew) return
    const value = dataGetter[this.validator](this.content)
    this.$store
      .dispatch('targets/update', {
        id: this.targetId,
        [fieldNames[this.validator]]: value || null,
      })
      .then(() => {
        this.reset()
      })
  }
}
</script>
<style scoped>
.mouse {
  cursor: pointer;
}
</style>
