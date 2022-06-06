<template>
  <div class="card">
    <div class="card-header">
      <div v-if="navBack" class="card-header-icon" @click="back()">
        <b-icon size="is-small" icon="arrow-left" />
      </div>
      <div class="card-header-title">{{ title }}</div>
      <slot name="end" />
    </div>
    <div class="card-content"><slot /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: { type: String, required: true },
    navBack: { type: Boolean, required: false, default: true },
  },
  methods: {
    back() {
      this.$router.push('/')
    },
  },
})
</script>
<style>
.datepicker-header > .pagination > a.pagination-next > .icon,
.datepicker-header > .pagination > a.pagination-previous > .icon {
  height: 0.9rem;
  width: 0.9rem;
}
</style>
