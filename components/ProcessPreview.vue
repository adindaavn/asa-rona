<template>
  <section ref="sectionRef" class="w-full bg-background py-24 md:py-32 overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 md:px-8">
      <div class="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div class="fade-in-up" :class="{ 'visible': isVisible }">
          <h2 class="text-[10px] font-bold tracking-[0.3em] uppercase text-text-secondary mb-10 block">Our Approach</h2>
          <div class="text-[clamp(1.5rem,3.5vw,3rem)] font-bold tracking-tight leading-[1.1] text-accent uppercase max-w-xl">
            A quiet approach to <br class="hidden lg:block"/> architectural soul.
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-16 mt-16 border-t border-border pt-16">
        <div 
          v-for="(step, i) in steps" 
          :key="i"
          class="fade-in-up group transition-all duration-700" 
          :class="{ 'visible': isVisible }"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="text-[10px] font-bold tracking-widest text-text-secondary w-16 mb-6 opacity-30 group-hover:opacity-100 transition-opacity uppercase">Step 0{{ i + 1 }}</div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-text-primary mb-4 group-hover:text-accent transition-colors">{{ step.title }}</h3>
          <p class="text-xs text-text-secondary leading-relaxed tracking-wide max-w-xs">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const steps = [
  { title: "Consultation", desc: "Understanding your lifestyle, vision, and the core intention of the project." },
  { title: "Concept Design", desc: "Crafting a mood and tone that reflects identity and aesthetic clarity." },
  { title: "Planning & Build", desc: "Detailed execution and refinement to ensure our vision is realized perfectly." }
]

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
</style>
