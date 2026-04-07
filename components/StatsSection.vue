<template>
  <section ref="target" class="max-w-[1440px] mx-auto px-6 md:px-8 py-12 md:py-16 border-b border-border">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-border">
      
      <div class="flex flex-col md:flex-row items-center md:items-baseline justify-center md:justify-start gap-2 md:gap-4 py-6 md:py-0 w-full">
        <span class="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight">{{ currentProjects }}+</span>
        <span class="text-xs md:text-sm font-medium text-text-secondary leading-tight md:max-w-[80px]">Projects Completed</span>
      </div>

      <div class="flex flex-col md:flex-row items-center md:items-baseline justify-center gap-2 md:gap-4 py-6 md:py-0 w-full">
        <span class="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight">{{ currentFurniture }}+</span>
        <span class="text-xs md:text-sm font-medium text-text-secondary leading-tight md:max-w-[80px]">Bespoke Furniture</span>
      </div>

      <div class="flex flex-col md:flex-row items-center md:items-baseline justify-center md:justify-end gap-2 md:gap-4 py-6 md:py-0 w-full">
        <span class="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight">{{ currentClient }}%</span>
        <span class="text-xs md:text-sm font-medium text-text-secondary leading-tight md:max-w-[80px]">Client Satisfaction</span>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const targetVisible = ref(false)

const targetProjects = 500
const targetFurniture = 200
const targetClient = 95

const currentProjects = ref(0)
const currentFurniture = ref(0)
const currentClient = ref(0)

let animationFrames = []

const animateValue = (targetVal, currentRef, duration) => {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    currentRef.value = Math.floor(progress * targetVal);
    if (progress < 1) {
      animationFrames.push(window.requestAnimationFrame(step));
    }
  };
  animationFrames.push(window.requestAnimationFrame(step));
}

useIntersectionObserver(target, ([entry]) => {
  if (entry?.isIntersecting) {
    if (!targetVisible.value) {
      targetVisible.value = true
      animateValue(targetProjects, currentProjects, 2000)
      animateValue(targetFurniture, currentFurniture, 2000)
      animateValue(targetClient, currentClient, 2000)
    }
  } else {
    targetVisible.value = false
    animationFrames.forEach(id => window.cancelAnimationFrame(id))
    animationFrames = []
    currentProjects.value = 0
    currentFurniture.value = 0
    currentClient.value = 0
  }
})
</script>
