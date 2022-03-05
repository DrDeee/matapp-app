<template>
  <b-select v-model="value" size="is-small"  expanded @input="$emit('input', $event)">
    <option value="whatsapp">WhatsApp</option>
    <option value="matrix">Matrix</option>
    <option value="telegram">Telegram</option>
    <option value="discord">Discord</option>
    <option value="signal">Signal</option>
  </b-select>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MessengerSelector extends Vue {
  @Prop({
    required: true,
  })
  value!: string
}
</script>
