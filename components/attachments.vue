<template>
  <div class="box">
    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <div class="title is-6 mb-0">Anhänge</div>
      <div>
        <b-tag>{{ attachments.length }}</b-tag>
      </div>
    </div>
    <div class="mx-3 mt-2">
      <attachment
        v-for="attachment in attachments"
        :key="attachment.id"
        :attachment="attachment"
      />
    </div>
    <b-field>
      <b-upload
        v-model="files"
        class="mt-2 is-flex is-justify-content-center"
        multiple
        size="is-small"
        expanded
      >
        <a class="button is-small is-expanded is-primary">Dateien hochladen</a>
      </b-upload>
    </b-field>
    <b-collapse animation="fade" :open="files.length !== 0">
      <div class="box mx-5">
        <div
          class="is-flex is-justify-content-space-between is-align-items-center"
        >
          <div class="title is-6 mb-0">Neue Anhänge</div>
          <div>
            <b-tag>{{ files.length }}</b-tag>
          </div>
        </div>
        <div class="tags mx-4">
          <span
            v-for="(file, index) in files"
            :key="index"
            class="tag is-primary"
          >
            {{ file.name }}
            <button
              class="delete is-small"
              type="button"
              @click="deleteDropFile(index)"
            ></button>
          </span>
        </div>
        <div class="has-text-centered">
          <b-button type="is-primary" size="is-small" @click="upload()"
            >Hochladen</b-button
          >
        </div>
      </div>
    </b-collapse>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class AttachementsComponent extends Vue {
  @Prop({ required: true })
  attachments!: any[]

  @Prop({ required: true })
  caseId!: string

  files: any[] = []

  deleteDropFile(index: number) {
    this.files.splice(index, 1)
  }

  async upload() {
    const data = new FormData()
    this.files.forEach((f) => {
      data.append('attachments', f)
    })
    const newAttachments: any[] = await this.$store.dispatch(
      'attachments/upload',
      data
    )
    newAttachments.forEach(async (a) => {
      await this.$store.dispatch('cases/addAttachment', {
        caseId: this.caseId,
        attachmentId: a.id,
      })
    })
  }
}
</script>
