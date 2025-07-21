<template>
  <div class="timeline-container">
    <div class="timeline-header">
      <h3>{{ title }}</h3>
    </div>
    
    <div class="timeline">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="timeline-item"
        :class="{ 'timeline-item-active': item.active }"
      >
        <div class="timeline-marker">
          <div class="timeline-dot" :class="{ 'dot-active': item.active }">
            <span v-if="item.icon">{{ item.icon }}</span>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <div v-if="index < items.length - 1" class="timeline-line"></div>
        </div>
        
        <div class="timeline-content">
          <div class="timeline-date">{{ item.date }}</div>
          <div class="timeline-title">{{ item.title }}</div>
          <div class="timeline-description">{{ item.description }}</div>
          <div v-if="item.status" class="timeline-status" :class="getStatusClass(item.status)">
            {{ item.status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Timeline'
  },
  items: {
    type: Array,
    default: () => [
      {
        date: '2024 Q1',
        title: 'Project Kickoff',
        description: 'Initial planning and team formation',
        status: 'completed',
        active: false,
        icon: '🚀'
      },
      {
        date: '2024 Q2',
        title: 'Development Phase',
        description: 'Core feature implementation',
        status: 'in-progress',
        active: true,
        icon: '⚡'
      },
      {
        date: '2024 Q3',
        title: 'Testing & QA',
        description: 'Quality assurance and testing',
        status: 'pending',
        active: false,
        icon: '🔧'
      }
    ]
  }
})

const getStatusClass = (status) => {
  switch (status) {
    case 'completed': return 'status-completed'
    case 'in-progress': return 'status-progress'
    case 'pending': return 'status-pending'
    default: return ''
  }
}
</script>

<style scoped>
.timeline-container {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(43, 108, 176, 0.1);
  border: 2px solid rgba(43, 108, 176, 0.1);
  overflow-x: auto; /* 横スクロールを可能にする */
}

.timeline-header h3 {
  color: #1A202C;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 3px solid #E53E3E;
  padding-bottom: 0.5rem;
}

.timeline {
  position: relative;
  display: flex; /* 横並びにする */
  padding-bottom: 1rem; /* スクロールバーのためのスペース */
}

.timeline-item {
  flex: 0 0 250px; /* 各アイテムの幅を固定 */
  margin-right: 2rem; /* アイテム間のスペース */
  display: flex;
  flex-direction: column; /* アイテム内の要素を縦並びにする */
  align-items: center;
  text-align: center;
  position: relative;
}

.timeline-item:last-child {
  margin-right: 0;
}

.timeline-item-active .timeline-content {
  background: rgba(43, 108, 176, 0.05);
  border-bottom: 4px solid #2B6CB0; /* 下線に変更 */
  border-left: none; /* 左線を削除 */
}

.timeline-marker {
  display: flex;
  flex-direction: column; /* マーカー内の要素を縦並びにする */
  align-items: center;
  margin-bottom: 1rem; /* マーカーとコンテンツの間のスペース */
  position: relative;
}

.timeline-dot {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: white;
  border: 3px solid #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.875rem;
  color: #6B7280;
  position: relative;
  z-index: 2;
}

.timeline-dot.dot-active {
  background: linear-gradient(135deg, #2B6CB0, #E53E3E);
  border-color: #2B6CB0;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(43, 108, 176, 0.3);
}

.timeline-line {
  width: 100%; /* 横に伸びる線 */
  height: 2px; /* 線の太さ */
  background: linear-gradient(to right, #E5E7EB, rgba(229, 231, 235, 0.3)); /* 横方向のグラデーション */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.timeline-item:not(:last-child) .timeline-line {
  width: calc(100% + 2rem); /* 次のアイテムまでの線 */
}

.timeline-content {
  flex: 1;
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  transition: all 0.3s ease;
  width: 100%; /* 親要素の幅に合わせる */
}

.timeline-content:hover {
  background: white;
  box-shadow: 0 4px 12px rgba(43, 108, 176, 0.1);
}

.timeline-date {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2B6CB0;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1A202C;
  margin-bottom: 0.5rem;
}

.timeline-description {
  font-size: 1rem;
  color: #4B5563;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.timeline-status {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-completed {
  background: rgba(56, 161, 105, 0.1);
  color: #38A169;
}

.status-progress {
  background: rgba(43, 108, 176, 0.1);
  color: #2B6CB0;
}

.status-pending {
  background: rgba(113, 128, 150, 0.1);
  color: #718096;
}
</style>