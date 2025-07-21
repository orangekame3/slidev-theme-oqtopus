<template>
  <div class="quantum-circuit">
    <div class="circuit-title">
      <slot name="title">Quantum Circuit</slot>
    </div>
    <div class="circuit-diagram">
      <div class="qubit-line" v-for="qubit in qubits" :key="qubit">
        <span class="qubit-label">|{{ qubit }}⟩</span>
        <div class="wire"></div>
        <div class="gate" v-for="gate in gates" :key="gate.id" :class="gate.type">
          {{ gate.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  qubits: {
    type: Array,
    default: () => ['0', '1']
  },
  gates: {
    type: Array,
    default: () => [
      { id: 1, type: 'hadamard', label: 'H' },
      { id: 2, type: 'cnot', label: '⊕' }
    ]
  }
})
</script>

<style scoped>
.quantum-circuit {
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 1rem;
  border: 2px solid var(--slidev-theme-secondary);
  margin: 1rem 0;
}

.circuit-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--slidev-theme-primary);
  margin-bottom: 1rem;
  text-align: center;
}

.qubit-line {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 1rem;
}

.qubit-label {
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  color: var(--slidev-theme-text);
  min-width: 3rem;
}

.wire {
  flex: 1;
  height: 2px;
  background: var(--slidev-theme-text);
  position: relative;
}

.gate {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  position: relative;
}

.gate.hadamard {
  background: var(--slidev-theme-primary);
}

.gate.cnot {
  background: var(--slidev-theme-accent);
}

.gate.pauli-x {
  background: #ef4444;
}

.gate.pauli-y {
  background: #f59e0b;
}

.gate.pauli-z {
  background: #8b5cf6;
}
</style>