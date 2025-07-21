<template>
  <div class="slide-footer flex justify-between items-end mt-4 flex-shrink-0">
    <img src="../assets/OqtopusSymbol.svg" alt="OQTOPUS" class="h-6 w-6 opacity-30" />
    <div class="text-xs text-oqtopus-blue opacity-70">
      {{ footerText || "Open Quantum Toolchain for Operators & Users" }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  footerText: {
    type: String,
    default: 'Open Quantum Toolchain for Operators & Users'
  }
})
</script>

<style scoped>
.text-oqtopus-blue {
  color: #2B6CB0;
}
</style>
