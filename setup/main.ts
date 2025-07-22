import { slideAspect } from '@slidev/client/env'

// Dynamic aspect ratio based on viewport
function updateAspectRatio() {
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const currentAspect = screenWidth / screenHeight
  
  // Update the slide aspect ratio to match the current viewport
  slideAspect.value = currentAspect
}

// Update on load and resize
window.addEventListener('load', updateAspectRatio)
window.addEventListener('resize', updateAspectRatio)

// Initial update
updateAspectRatio()