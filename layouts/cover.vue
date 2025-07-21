<template>
  <div class="slidev-layout cover relative overflow-hidden">
    <!-- Professional gradient background with improved contrast -->
    <div class="absolute inset-0 bg-gradient-to-br from-oqtopus-blue via-oqtopus-dark to-oqtopus-red"></div>
    <!-- Dark overlay for better text readability -->
    <div class="absolute inset-0 bg-black opacity-30"></div>
    
    <!-- Subtle pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="quantum-particle" v-for="i in 15" :key="i" 
           :style="{ 
             left: Math.random() * 100 + '%', 
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 8 + 's'
           }">
      </div>
    </div>
    
    <!-- OQTOPUS Logo Header -->
    <div class="absolute top-8 right-8 z-20">
      <img src="../assets/OqtopusLogo.svg" alt="OQTOPUS" class="h-12 w-auto" />
    </div>
    
    <!-- Main content area -->
    <div class="flex items-center justify-center min-h-full relative z-10 px-16">
      <div class="text-center text-white max-w-4xl">
        <slot />
      </div>
    </div>
    
    <!-- Professional footer -->
    <div class="absolute bottom-8 right-8 z-20 text-white opacity-80">
      <div class="text-sm font-medium">Open Quantum Toolchain</div>
      <div class="text-xs">for Operators & Users</div>
    </div>
    
    <!-- Decorative corner elements -->
    <div class="absolute top-0 right-0 w-64 h-64 opacity-20">
      <div class="w-full h-full rounded-full border-4 border-white transform translate-x-32 -translate-y-32"></div>
    </div>
    <div class="absolute bottom-0 left-0 w-48 h-48 opacity-20">
      <div class="w-full h-full rounded-full border-4 border-white transform -translate-x-24 translate-y-24"></div>
    </div>
  </div>
</template>

<style scoped>
.quantum-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
}

.from-oqtopus-blue {
  --tw-gradient-from: #2B6CB0;
}

.via-oqtopus-dark {
  --tw-gradient-via: #1A202C;
}

.to-oqtopus-red {
  --tw-gradient-to: #E53E3E;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1) rotate(0deg);
    opacity: 0.6;
  }
  33% {
    transform: translateY(-15px) scale(1.1) rotate(120deg);
    opacity: 1;
  }
  66% {
    transform: translateY(-8px) scale(0.9) rotate(240deg);
    opacity: 0.8;
  }
}

/* Enhanced text readability for cover content */
.slidev-layout.cover h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6);
  color: white !important;
  line-height: 1.1;
}

.slidev-layout.cover h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.95) !important;
  border-bottom: none !important;
}

.slidev-layout.cover p {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7), 0 1px 2px rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.9) !important;
}

/* Enhanced button styling */
.slidev-layout.cover .oqtopus-highlight {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.slidev-layout.cover .oqtopus-highlight:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>
