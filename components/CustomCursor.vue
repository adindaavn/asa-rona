<template>
  <div 
    class="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
    :style="{ 
      transform: `translate3d(${currX}px, ${currY}px, 0) translate(-50%, -50%)`,
      mixBlendMode: 'exclusion'
    }"
  >
    <!-- Thinner, refined ✦ sparkle icon with interactive feedback -->
    <div 
      class="transition-all duration-500 ease-out flex items-center justify-center"
      :style="{ 
        transform: `scale(${isHovering ? 1.4 : 1}) rotate(${isHovering ? '45deg' : '0deg'})`,
        opacity: isVisible ? 1 : 0
      }"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="white" 
        xmlns="http://www.w3.org/2000/svg"
        class=""
      >
        <path d="M12 2C12 2 12.5 10 14.5 12C16.5 14 22 12 22 12C22 12 16.5 10 14.5 12C12.5 14 12 22 12 22C12 22 11.5 14 9.5 12C7.5 10 2 12 2 12C2 12 7.5 14 9.5 12C11.5 10 12 2 12 2Z" />
      </svg>
      
      <!-- Subtle outer glow on hover -->
      <div 
        class="absolute inset-0 bg-white/20 blur-xl rounded-full transition-opacity duration-700"
        :style="{ opacity: isHovering ? 1 : 0 }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const targetX = ref(0)
const targetY = ref(0)
const currX = ref(0)
const currY = ref(0)
const isHovering = ref(false)
const isVisible = ref(false)

const lerp = (start, end, factor) => start + (end - start) * factor

const updateMousePosition = (e) => {
  currX.value = e.clientX
  currY.value = e.clientY
  if (!isVisible.value) isVisible.value = true
}

const updateHoverState = (e) => {
  const target = e.target
  if (target.closest('a, button, [role="button"], .clickable')) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

const animate = () => {
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
  window.addEventListener('mouseover', updateHoverState)
  
  // Initialize position to avoid jump from (0,0)
  const initialPos = (e) => {
    currX.value = e.clientX
    currY.value = e.clientY
    window.removeEventListener('mousemove', initialPos)
  }
  window.addEventListener('mousemove', initialPos)
  
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition)
  window.removeEventListener('mouseover', updateHoverState)
})
</script>

<style>
@media (min-width: 768px) {
  * {
    cursor: none !important;
  }
}

@keyframes spin-custom {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
