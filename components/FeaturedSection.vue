<template>
  <section ref="sectionRef" class="max-w-[1440px] mx-auto px-8 py-24 md:py-32 border-t border-border overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      <!-- Original split layout, featured image -->
      <div class="order-2 md:order-1 relative aspect-[4/5] bg-muted overflow-hidden fade-in-up" :class="{ 'visible': isVisible }">
        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200" alt="Featured Interior" class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
        <div class="absolute bottom-6 left-6 p-4 bg-white rounded-2xl shadow-sm">
          <span class="text-[10px] tracking-widest uppercase font-bold text-text-secondary block mb-1">Project Focus</span>
          <h4 class="text-sm font-bold uppercase">The Aspen Residence</h4>
        </div>
      </div>

      <!-- Original text, Reference typography and button -->
      <div class="order-1 md:order-2 md:pl-12 flex flex-col items-start justify-center fade-in-up delay-200" :class="{ 'visible': isVisible }">
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] uppercase">Elevating Comfort <br/>With Every Curve</h2>
        <p class="text-sm leading-relaxed text-text-secondary mb-12 max-w-lg">
          Our philosophy centers on an unwavering commitment to quality and the belief that the spaces we inhabit shape the way we live. We use soft geometry, warm minimalism, and structural clarity.
        </p>
        <NuxtLink to="/projects" class="flex items-center px-8 py-4 rounded-full border border-black text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500 group">
          Explore Experience <ArrowRightIcon class="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRightIcon } from 'lucide-vue-next'

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

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-200 { transition-delay: 0.2s; }
</style>
