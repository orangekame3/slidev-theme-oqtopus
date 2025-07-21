<template>
  <div class="slidev-layout thanks relative min-h-full flex items-center justify-center overflow-hidden">
    <!-- Elegant gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-oqtopus-dark via-oqtopus-blue to-oqtopus-red"></div>
    
    <!-- Decorative circles -->
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 transform translate-x-48 -translate-y-48"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-5 transform -translate-x-32 translate-y-32"></div>
    
    <!-- Large OQTOPUS Symbol background -->
    <div class="absolute inset-0 flex items-center justify-center opacity-8">
      <img src="../assets/OqtopusSymbol.svg" alt="OQTOPUS" class="w-[600px] h-[600px] object-contain" />
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center text-white px-16 max-w-5xl">
      <slot />
    </div>
    
    <!-- Contact/Footer Information -->
    <div class="absolute bottom-8 left-8 right-8 z-20">
      <div class="flex justify-between items-end text-white">
        <div>
          <img src="../assets/OqtopusLogo.svg" alt="OQTOPUS" class="h-12 w-auto mb-2" />
          <div class="text-sm opacity-80">Open Quantum Toolchain</div>
          <div class="text-xs opacity-70">for Operators & Users</div>
        </div>
        <div class="text-right text-sm opacity-80">
          <div>Thank you for your attention</div>
          <div class="text-xs opacity-70">Questions & Discussion</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.from-oqtopus-dark {
  --tw-gradient-from: #1A202C;
}

.via-oqtopus-blue {
  --tw-gradient-via: #2B6CB0;
}

.to-oqtopus-red {
  --tw-gradient-to: #E53E3E;
}

.slidev-layout.thanks h1 {
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  background: linear-gradient(45deg, #ffffff, #E53E3E);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slidev-layout.thanks h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.slidev-layout.thanks p {
  font-size: 1.5rem;
  opacity: 0.85;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
</style>
