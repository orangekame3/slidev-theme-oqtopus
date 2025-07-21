<template>
  <SlideLayout class="slidev-layout two-cols">
    <!-- Two column layout -->
    <div class="grid grid-cols-2 gap-6 h-full">
      <!-- Left column -->
      <div class="left">
        <slot name="left">
          <!-- Default left content -->
        </slot>
      </div>
      
      <!-- Right column -->
      <div class="right">
        <slot name="right">
          <!-- Default right content -->
        </slot>
      </div>
    </div>
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue'
</script>

<style scoped>
.border-oqtopus-blue {
  border-color: #2B6CB0;
}

.text-oqtopus-blue {
  color: #2B6CB0;
}

.slidev-layout.two-cols .left,
.slidev-layout.two-cols .right {
  padding: 1rem;
}

.slidev-layout.two-cols .left {
  border-right: 2px solid rgba(43, 108, 176, 0.1);
}

/* Compact spacing for two columns */
.slidev-layout.two-cols h1 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  margin-top: 0;
  line-height: 1.1;
}

.slidev-layout.two-cols h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  margin-top: 0;
  border-bottom: 2px solid var(--oqtopus-red);
  padding-bottom: 0.25rem;
  line-height: 1.2;
}

.slidev-layout.two-cols h3 {
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
  margin-top: 0;
  line-height: 1.3;
}

.slidev-layout.two-cols p {
  font-size: 0.85rem;
  margin-bottom: 0.625rem;
  margin-top: 0;
  line-height: 1.4;
}

.slidev-layout.two-cols ul {
  margin-bottom: 0.75rem;
  margin-top: 0;
}

.slidev-layout.two-cols li {
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
  line-height: 1.2;
}
</style>