<template>
  <div class="slidev-layout section relative min-h-full flex items-center justify-center">
    <!-- Background with brand gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-oqtopus-blue to-oqtopus-red opacity-90"></div>
    
    <!-- OQTOPUS Symbol in background -->
    <div class="absolute inset-0 flex items-center justify-center opacity-10">
      <img src="../assets/OqtopusSymbol.svg" alt="OQTOPUS" class="w-96 h-96 object-contain" />
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center text-white px-16 max-w-4xl">
      <slot />
    </div>
    
    <!-- Logo in corner -->
    <div class="absolute top-8 right-8 z-20">
      <img src="../assets/OqtopusLogo.svg" alt="OQTOPUS" class="h-10 w-auto opacity-80" />
    </div>
  </div>
</template>

<style scoped>
.from-oqtopus-blue {
  --tw-gradient-from: #2B6CB0;
}

.to-oqtopus-red {
  --tw-gradient-to: #E53E3E;
}

.slidev-layout.section h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.slidev-layout.section h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  opacity: 0.9;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.slidev-layout.section p {
  font-size: 1.25rem;
  opacity: 0.85;
  line-height: 1.6;
}
</style>
