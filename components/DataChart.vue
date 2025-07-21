<template>
  <div class="chart-container">
    <div class="chart-header">
      <h3>{{ title }}</h3>
      <div class="chart-type-selector">
        <button 
          v-for="type in chartTypes" 
          :key="type"
          @click="currentType = type"
          :class="{ active: currentType === type }"
          class="chart-btn"
        >
          {{ type }}
        </button>
      </div>
    </div>
    
    <div class="chart-content">
      <!-- Bar Chart -->
      <div v-if="currentType === 'bar'" class="bar-chart">
        <div class="chart-grid">
          <div 
            v-for="(item, index) in data" 
            :key="index"
            class="bar-item"
          >
            <div 
              class="bar"
              :style="{ height: `${(item.value / maxValue) * 100}%` }"
              :title="`${item.label}: ${item.value}`"
            ></div>
            <div class="bar-label">{{ item.label }}</div>
          </div>
        </div>
      </div>
      
      <!-- Line Chart (simplified) -->
      <div v-else-if="currentType === 'line'" class="line-chart">
        <svg viewBox="0 0 400 200" class="line-svg">
          <polyline
            :points="linePoints"
            fill="none"
            stroke="url(#gradient)"
            stroke-width="3"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#2B6CB0;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#E53E3E;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle 
            v-for="(point, index) in lineCoordinates"
            :key="index"
            :cx="point.x" 
            :cy="point.y" 
            r="4"
            fill="#2B6CB0"
            class="data-point"
          />
        </svg>
        <div class="line-labels">
          <span v-for="(item, index) in data" :key="index">{{ item.label }}</span>
        </div>
      </div>
      
      <!-- Pie Chart (CSS-based) -->
      <div v-else-if="currentType === 'pie'" class="pie-chart">
        <div class="pie-visual">
          <div 
            v-for="(item, index) in data.slice(0, 4)" 
            :key="index"
            class="pie-slice"
            :style="getPieSliceStyle(item, index)"
          ></div>
        </div>
        <div class="pie-legend">
          <div 
            v-for="(item, index) in data.slice(0, 4)" 
            :key="index"
            class="legend-item"
          >
            <div 
              class="legend-color"
              :style="{ background: getPieColor(index) }"
            ></div>
            <span>{{ item.label }}: {{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Chart Footer -->
    <div class="chart-footer">
      <div class="chart-stats">
        <span>Total: {{ totalValue }}</span>
        <span>Max: {{ maxValue }}</span>
        <span>Items: {{ data.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Data Visualization'
  },
  data: {
    type: Array,
    default: () => [
      { label: 'Q1', value: 85 },
      { label: 'Q2', value: 120 },
      { label: 'Q3', value: 95 },
      { label: 'Q4', value: 150 }
    ]
  },
  type: {
    type: String,
    default: 'bar'
  }
})

const currentType = ref(props.type)
const chartTypes = ['bar', 'line', 'pie']

const maxValue = computed(() => Math.max(...props.data.map(item => item.value)))
const totalValue = computed(() => props.data.reduce((sum, item) => sum + item.value, 0))

const linePoints = computed(() => {
  const points = props.data.map((item, index) => {
    const x = (index / (props.data.length - 1)) * 380 + 10
    const y = 180 - ((item.value / maxValue.value) * 160) + 10
    return `${x},${y}`
  })
  return points.join(' ')
})

const lineCoordinates = computed(() => {
  return props.data.map((item, index) => ({
    x: (index / (props.data.length - 1)) * 380 + 10,
    y: 180 - ((item.value / maxValue.value) * 160) + 10
  }))
})

const getPieColor = (index) => {
  const colors = ['#2B6CB0', '#E53E3E', '#38A169', '#D69E2E']
  return colors[index % colors.length]
}

const getPieSliceStyle = (item, index) => {
  const percentage = (item.value / totalValue.value) * 100
  const rotation = props.data.slice(0, index).reduce((sum, prev) => {
    return sum + (prev.value / totalValue.value) * 360
  }, 0)
  
  return {
    background: `conic-gradient(${getPieColor(index)} 0deg ${percentage * 3.6}deg, transparent ${percentage * 3.6}deg)`,
    transform: `rotate(${rotation}deg)`
  }
}
</script>

<style scoped>
.chart-container {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(43, 108, 176, 0.1);
  border: 2px solid rgba(43, 108, 176, 0.1);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #E53E3E;
  padding-bottom: 1rem;
}

.chart-header h3 {
  color: #1A202C;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.chart-type-selector {
  display: flex;
  gap: 0.5rem;
}

.chart-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #2B6CB0;
  background: white;
  color: #2B6CB0;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;
}

.chart-btn:hover {
  background: rgba(43, 108, 176, 0.1);
}

.chart-btn.active {
  background: #2B6CB0;
  color: white;
}

.chart-content {
  height: 300px;
  position: relative;
}

/* Bar Chart Styles */
.bar-chart {
  height: 100%;
}

.chart-grid {
  display: flex;
  align-items: end;
  height: 80%;
  gap: 1rem;
  padding: 1rem 0;
}

.bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.bar {
  width: 100%;
  background: linear-gradient(to top, #2B6CB0, #E53E3E);
  border-radius: 0.5rem 0.5rem 0 0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.bar:hover {
  opacity: 0.8;
  transform: scaleY(1.05);
}

.bar-label {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1A202C;
}

/* Line Chart Styles */
.line-chart {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.line-svg {
  flex: 1;
  width: 100%;
}

.data-point {
  cursor: pointer;
}

.data-point:hover {
  r: 6;
  fill: #E53E3E;
}

.line-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1A202C;
}

/* Pie Chart Styles */
.pie-chart {
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;
}

.pie-visual {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.pie-slice {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.pie-legend {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: #1A202C;
}

.legend-color {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}

.chart-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #E5E7EB;
}

.chart-stats {
  display: flex;
  gap: 2rem;
  font-size: 0.875rem;
  color: #6B7280;
}

.chart-stats span {
  font-weight: 600;
}
</style>