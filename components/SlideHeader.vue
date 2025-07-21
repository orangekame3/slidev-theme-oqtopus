<template>
  <div class="slide-header flex flex-row-reverse items-start justify-between flex-shrink-0">
    <img src="../assets/OqtopusLogo.svg" alt="OQTOPUS" class="h-8 w-auto" />
    <div class="text-left" v-if="title || subtitle">
      <div class="text-lg font-bold text-oqtopus-dark" v-if="title">{{ title }}</div>
      <div class="text-xs text-oqtopus-blue font-medium" v-if="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.text-oqtopus-dark {
  color: #1A202C;
}

.text-oqtopus-blue {
  color: #2B6CB0;
}
</style>
