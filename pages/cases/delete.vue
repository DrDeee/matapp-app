<template>
  <Page title="Awarenessvorfall löschen" style="min-height: 50vh">
    <div v-if="myCase">
      <b-message type="is-danger" has-icon icon="trash">
        <b>Bist du sicher, dass du den nachfolgenden Awarenessfall #{{
          myCase.id
        }}
        löschen willst?</b> Dies lässt sich nicht rückgängig machen!</b-message
      >

      <case :my-case="myCase" :slim="true">
        <template #bottom>
          <div class="card-footer">
            <a
              class="card-footer-item"
              @click="$router.push('/#' + myCase.id)"
              >Abbrechen</a
            >
            <a class="card-footer-item" @click="deleteCase()">Löschen</a>
          </div>
        </template>
      </case>
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
    if (!this.$route.query.id) this.$router.push('/')
    else {
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

  async deleteCase() {
    await this.$store.dispatch('cases/delete', this.myCase.id)
    this.$router.push('/')
  }
}
</script>
