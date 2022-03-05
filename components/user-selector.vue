<template>
  <b-select
    v-model="value"
    :size="isSmall ? 'is-small' : ''"
    :placeholder="placeholder"
    expanded
    @input="$emit('input', $event)"
  >
    <option v-for="user in users" :key="user.id" :value="user.id">
      {{ user.displayName ? user.displayName : user.userName }}
    </option>
  </b-select>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UserSelector extends Vue {
  @Prop({ required: true })
  value!: any

  @Prop({
    required: false,
    default: false,
  })
  isSmall!: boolean

  @Prop({
    required: false,
    default: 'Benutzer auswählen',
  })
  placeholder!: string

  get users() {
    return this.$store.state.users.all
  }
}
</script>
