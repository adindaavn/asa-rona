<template>
  <section ref="sectionRef" class="w-full py-24 md:py-32 border-y border-border bg-background">
    <!-- 4-Column Vertical Layout -->
    <div class="w-full grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-t border-b border-border transition-all duration-1000" :class="isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'">
      
      <!-- Card 1: Kitchen -->
      <NuxtLink to="/projects/kitchen" class="group relative overflow-hidden h-[600px] flex flex-col justify-between p-10 bg-background cursor-pointer">
        <div class="absolute inset-0 z-0 bg-white">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" alt="Kitchen" class="w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out" />
        </div>
        <div class="relative z-10 flex items-center justify-between">
          <CoffeeIcon class="w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" />
        </div>
        <div class="relative z-10">
          <h3 class="text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans">Kitchen<br/>Design</h3>
        </div>
      </NuxtLink>

      <!-- Card 2: Bedroom -->
      <NuxtLink to="/projects/bedroom" class="group relative overflow-hidden h-[600px] flex flex-col justify-between p-10 bg-background cursor-pointer">
        <div class="absolute inset-0 z-0 bg-white">
          <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000" alt="Bedroom" class="w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out" />
        </div>
        <div class="relative z-10 flex items-center justify-between">
          <BedIcon class="w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" />
        </div>
        <div class="relative z-10">
          <h3 class="text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans">Bedroom<br/>Serenity</h3>
        </div>
      </NuxtLink>

      <!-- Card 3: Living Room -->
      <NuxtLink to="/projects/living-room" class="group relative overflow-hidden h-[600px] flex flex-col justify-between p-10 bg-background cursor-pointer">
        <div class="absolute inset-0 z-0 bg-white">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" alt="Living Room" class="w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out" />
        </div>
        <div class="relative z-10 flex items-center justify-between">
          <SofaIcon class="w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" />
        </div>
        <div class="relative z-10">
          <h3 class="text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans">Living<br/>Spaces</h3>
        </div>
      </NuxtLink>

      <!-- Card 4: Custom Furniture -->
      <NuxtLink to="/projects/custom-furniture" class="group relative overflow-hidden h-[600px] flex flex-col justify-between p-10 bg-background cursor-pointer">
        <div class="absolute inset-0 z-0 bg-white">
          <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000" alt="Custom Furniture" class="w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out" />
        </div>
        <div class="relative z-10 flex items-center justify-between">
          <HammerIcon class="w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" />
        </div>
        <div class="relative z-10">
          <h3 class="text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans">Custom<br/>Furniture</h3>
        </div>
      </NuxtLink>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CoffeeIcon, BedIcon, SofaIcon, HammerIcon } from 'lucide-vue-next'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
      } else {
        isVisible.value = false
      }
    })
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>
