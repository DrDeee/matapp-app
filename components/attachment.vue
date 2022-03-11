<template>
  <div class="card mt-2">
    <div class="card-header is-clickable" @click="download()">
      <div class="card-header-icon">
        <b-icon icon="cloud-arrow-down" size="is-small" />
      </div>
      <div class="card-header-title">{{ attachment.name }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { saveAs } from 'file-saver'

@Component
export default class AttachmentComponent extends Vue {
  @Prop({ required: true })
  attachment!: any

  async download() {
    const data = await this.$store.dispatch(
      'attachments/download',
      this.attachment.id
    )
    saveAs(data, this.attachment.name)
  }
}
</script>

<style scoped>
.frame {
  display: flex;
  min-height: 90vh;
  margin: 0;
  padding: 0;
}

.frame > .frame-content {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
