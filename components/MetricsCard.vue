<template>
  <div class="metrics-card">
    <div class="metrics-header">
      <div class="metric-icon">
        <slot name="icon">📊</slot>
      </div>
      <div class="metric-title">
        <slot name="title">Metric</slot>
      </div>
    </div>
    
    <div class="metric-value">
      <slot name="value">0</slot>
    </div>
    
    <div class="metric-subtitle">
      <slot name="subtitle">Performance Indicator</slot>
    </div>
    
    <div v-if="trend" class="metric-trend" :class="trendClass">
      <span class="trend-icon">{{ trendIcon }}</span>
      <span class="trend-text">{{ trend }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  trend: {
    type: String,
    default: ''
  },
  trendDirection: {
    type: String,
    default: 'up', // 'up', 'down', 'stable'
    validator: (value) => ['up', 'down', 'stable'].includes(value)
  }
})

const trendClass = computed(() => {
  return {
    'trend-up': props.trendDirection === 'up',
    'trend-down': props.trendDirection === 'down',
    'trend-stable': props.trendDirection === 'stable'
  }
})

const trendIcon = computed(() => {
  switch (props.trendDirection) {
    case 'up': return '↗️'
    case 'down': return '↘️'
    case 'stable': return '→'
    default: return '→'
  }
})
</script>

<style scoped>
.metrics-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(43, 108, 176, 0.1);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  transition: all 0.3s ease;
}

.metrics-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(43, 108, 176, 0.15);
  border-color: #2B6CB0;
}

.metrics-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #2B6CB0, #E53E3E);
  border-radius: 1rem 1rem 0 0;
}

.metrics-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.metric-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #2B6CB0, #E53E3E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.metric-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1A202C;
}

.metric-value {
  font-size: 3rem;
  font-weight: 800;
  color: #2B6CB0;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.metric-subtitle {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 1rem;
}

.metric-trend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
}

.trend-up {
  background: rgba(56, 161, 105, 0.1);
  color: #38A169;
}

.trend-down {
  background: rgba(229, 62, 62, 0.1);
  color: #E53E3E;
}

.trend-stable {
  background: rgba(113, 128, 150, 0.1);
  color: #718096;
}

.trend-icon {
  font-size: 1rem;
}
</style>