<template>
  <section ref="sectionRef" class="w-full py-32 md:py-48 bg-black text-white relative overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-center text-center relative z-10 fade-in-up" :class="{ 'visible': isVisible }">
      <h2 class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-12 uppercase leading-[0.9]">
        Ready to create <br /> something timeless?
      </h2>
      <NuxtLink 
        to="/contact" 
        class="group flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
      >
        Start a Conversation
        <ArrowRightIcon class="w-4 h-4 ms-3 transition-transform duration-500 group-hover:translate-x-1" />
      </NuxtLink>
    </div>
    
    <!-- Subtle Background Detail -->
    <div class="absolute top-[20%] left-[10%] text-white/5 pointer-events-none text-9xl font-bold uppercase select-none">ASA</div>
    <div class="absolute bottom-[20%] right-[10%] text-white/5 pointer-events-none text-9xl font-bold uppercase select-none">RONA</div>
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
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
