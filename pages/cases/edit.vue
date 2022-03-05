<template>
  <Page title="Awarenessvorfall bearbeiten" style="min-height: 50vh">
    <div v-if="myCase">
      <case-editor :acase="myCase" />
    </div>
    <div v-else-if="notFound">
      <div class="p-5 has-text-centered">
        Es gibt keinen Awarenessfall "{{ $route.query.id }}"
      </div>
    </div>
    <div v-else><b-loading :is-full-page="false" active /></div>
  </Page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CaseEditPage extends Vue {
  myCase: any = false
  notFound: boolean = false

  async created() {
    if (!this.$route.query.id) this.$router.push('/cases')
    else {
      this.$store.dispatch('targets/loadAll')
      this.$store.dispatch('chats/loadAll')
      try {
        this.myCase = await this.$store.dispatch(
          'cases/loadOne',
          this.$route.query.id
        )
      } catch (e) {
        this.notFound = true
      }
    }
  }
}
</script>
