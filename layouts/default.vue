<template>
  <SlideLayout class="slidev-layout default">
    <slot />
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue'
</script>

<style scoped>
.text-oqtopus-blue {
  color: #2B6CB0;
}

/* Default layout specific styling */
.slidev-layout.default h1 {
  color: #1A202C;
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.1;
}

.slidev-layout.default h2 {
  color: #2B6CB0;
  margin-bottom: 0.875rem;
  margin-top: 0;
  font-size: 1.3rem;
  font-weight: 600;
  border-bottom: 2px solid #E53E3E;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  line-height: 1.2;
}

.slidev-layout.default h3 {
  color: #2B6CB0;
  margin-bottom: 0.75rem;
  margin-top: 0;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3;
}

.slidev-layout.default li {
  margin-bottom: 0.25rem;
  line-height: 1.3;
}
</style>