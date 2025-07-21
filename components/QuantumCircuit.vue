<template>
  <div class="quantum-circuit">
    <div class="circuit-title">
      <slot name="title">Quantum Circuit</slot>
    </div>
    <div class="circuit-diagram">
      <svg :width="svgWidth" :height="svgHeight">
        <!-- Qubit lines -->
        <g v-for="(qubit, qIndex) in qubits" :key="qubit">
          <text :x="qubitLabelOffset" :y="getQubitY(qIndex) + 5" class="qubit-label">|{{ qubit }}⟩</text>
          <line 
            :x1="qubitLabelOffset + 30" 
            :y1="getQubitY(qIndex)" 
            :x2="svgWidth - 20" 
            :y2="getQubitY(qIndex)" 
            stroke="var(--slidev-theme-text)" 
            stroke-width="2"
          />
        </g>

        <!-- Gates -->
        <g v-for="gate in gates" :key="gate.id">
          <template v-if="gate.type === 'cnot'">
            <!-- CNOT Control -->
            <circle 
              :cx="getGateX(gate.position)" 
              :cy="getQubitY(gate.control)" 
              r="4"
              fill="var(--slidev-theme-text)"
            />
            <!-- CNOT Target -->
            <circle 
              :cx="getGateX(gate.position)" 
              :cy="getQubitY(gate.target)" 
              r="10"
              fill="none"
              stroke="var(--slidev-theme-text)"
              stroke-width="2"
            />
            <line 
              :x1="getGateX(gate.position) - 5" 
              :y1="getQubitY(gate.target)" 
              :x2="getGateX(gate.position) + 5" 
              :y2="getQubitY(gate.target)" 
              stroke="var(--slidev-theme-text)"
              stroke-width="2"
            />
            <line 
              :x1="getGateX(gate.position)" 
              :y1="getQubitY(gate.target) - 5" 
              :x2="getGateX(gate.position)" 
              :y2="getQubitY(gate.target) + 5" 
              stroke="var(--slidev-theme-text)"
              stroke-width="2"
            />
            <!-- CNOT Connecting Line -->
            <line 
              :x1="getGateX(gate.position)" 
              :y1="getQubitY(gate.control)" 
              :x2="getGateX(gate.position)" 
              :y2="getQubitY(gate.target)" 
              stroke="var(--slidev-theme-text)"
              stroke-width="2"
            />
          </template>
          <template v-else>
            <rect 
              :x="getGateX(gate.position) - gateSize / 2" 
              :y="getQubitY(gate.qubit) - gateSize / 2" 
              :width="gateSize" 
              :height="gateSize"
              :class="['gate-rect', `gate-${gate.type}`]"
              rx="5" ry="5"
            />
            <text 
              :x="getGateX(gate.position)" 
              :y="getQubitY(gate.qubit) + 5" 
              class="gate-label"
            >
              {{ gate.label }}
            </text>
          </template>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  qubits: {
    type: Array,
    default: () => ['q0', 'q1', 'q2']
  },
  gates: {
    type: Array,
    default: () => [
      { id: 1, type: 'hadamard', label: 'H', qubit: 0, position: 1 },
      { id: 2, type: 'cnot', control: 0, target: 1, position: 2 }, // controlとtargetを追加
      { id: 3, type: 'pauli-z', label: 'Z', qubit: 0, position: 3 }
    ]
  }
})

const qubitSpacing = 60; // Vertical space between qubit lines
const gateSpacing = 80; // Horizontal space between gate positions
const gateSize = 40;    // Size of the square gate
const qubitLabelOffset = 20; // Offset for qubit labels

const svgWidth = computed(() => {
  const maxPosition = Math.max(...props.gates.map(g => g.position), 0);
  return qubitLabelOffset + 30 + (maxPosition + 1) * gateSpacing + 20; // Label + wire start + gates + padding
});

const svgHeight = computed(() => {
  return props.qubits.length * qubitSpacing + 40; // Qubits + padding
});

const getQubitY = (qIndex) => {
  return 30 + qIndex * qubitSpacing;
};

const getGateX = (position) => {
  return qubitLabelOffset + 30 + position * gateSpacing;
};
</script>

<style scoped>
.quantum-circuit {
  padding: 1rem;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 1rem;
  border: 2px solid var(--slidev-theme-secondary);
  margin: 1rem 0;
  overflow-x: auto; /* 横スクロールを可能にする */
}

.circuit-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--slidev-theme-primary);
  margin-bottom: 0.8rem;
  text-align: center;
}

.circuit-diagram {
  width: 100%;
  height: auto;
}

.qubit-label {
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  font-size: 0.9em;
  fill: var(--slidev-theme-text);
}

.gate-rect {
  fill: var(--slidev-theme-primary);
  stroke: var(--slidev-theme-primary);
  stroke-width: 2;
}

.gate-label {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 0.9em;
  fill: white;
  text-anchor: middle;
  dominant-baseline: middle;
}

/* Gate specific colors */
.gate-hadamard {
  fill: var(--slidev-theme-primary);
}

.gate-cnot {
  /* CNOTはSVG要素で直接スタイルを定義するため、ここでは不要 */
}

.gate-pauli-x {
  fill: #ef4444;
}

.gate-pauli-y {
  fill: #f59e0b;
}

.gate-pauli-z {
  fill: #8b5cf6;
}
</style>