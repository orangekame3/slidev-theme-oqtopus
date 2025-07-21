<template>
  <SlideLayout 
    header-title="Agenda" 
    header-subtitle="Meeting Outline"
    class="slidev-layout agenda"
  >
    <slot />
  </SlideLayout>
</template>

<script setup>
import SlideLayout from '../components/SlideLayout.vue'
</script>

<style scoped>
.border-oqtopus-blue {
  border-color: #2B6CB0;
}

.text-oqtopus-dark {
  color: #1A202C;
}

.text-oqtopus-blue {
  color: #2B6CB0;
}

/* Compact agenda list styling for better fit */
.slidev-layout.agenda ul {
  counter-reset: agenda-counter;
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
  margin-bottom: 0;
  width: 100%;
}

.slidev-layout.agenda li {
  counter-increment: agenda-counter;
  position: relative;
  padding: 0.4rem 0.875rem 0.4rem 2.5rem;
  margin-bottom: 0.3rem;
  background: white;
  border-radius: 0.375rem;
  box-shadow: 0 1px 4px rgba(43, 108, 176, 0.08);
  border-left: 2px solid #E53E3E;
  font-size: 0.85rem;
  font-weight: 500;
  color: #1A202C;
  transition: all 0.3s ease;
  line-height: 1.1;
  display: flex;
  align-items: center;
  min-height: 2.25rem;
}

.slidev-layout.agenda li:hover {
  transform: translateX(6px);
  box-shadow: 0 4px 12px rgba(43, 108, 176, 0.15);
  border-left-width: 4px;
}

.slidev-layout.agenda li::before {
  content: counter(agenda-counter);
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  background: #E53E3E;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.7rem;
  z-index: 1;
}

.slidev-layout.agenda h1 {
  color: #1A202C;
  margin-bottom: 0.5rem;
  margin-top: 0;
  font-size: 1.75rem;
  font-weight: 800;
}

.slidev-layout.agenda h2 {
  color: #2B6CB0;
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 1.25rem;
  font-weight: 600;
  border-bottom: 2px solid #E53E3E;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  max-width: 90%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .slidev-layout.agenda li {
    font-size: 1rem;
    padding: 0.875rem 1.25rem 0.875rem 3rem;
  }
  
  .slidev-layout.agenda li::before {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.75rem;
    left: 0.625rem;
  }
}
</style>