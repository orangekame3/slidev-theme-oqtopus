<template>
  <div class="slide-layout" style="padding: 0.5rem 2rem; height: 100vh; display: flex; flex-direction: column;">
    <!-- Common Header -->
    <SlideHeader :title="headerTitle" :subtitle="headerSubtitle" />
    
    <!-- Main Content Area -->
    <div class="flex-1 overflow-hidden">
      <slot />
    </div>
    
    <!-- Common Footer -->
    <SlideFooter :footer-text="footerText" />
  </div>
</template>

<script setup>
import SlideHeader from './SlideHeader.vue'
import SlideFooter from './SlideFooter.vue'

const props = defineProps({
  headerTitle: {
    type: String,
    default: ''
  },
  headerSubtitle: {
    type: String,
    default: ''
  },
  footerText: {
    type: String,
    default: 'Open Quantum Toolchain for Operators & Users'
  }
})
</script>

<style scoped>
.slide-layout {
  background-color: #FAFAFA;
  color: #1A202C;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  line-height: 1.6;
}
</style>