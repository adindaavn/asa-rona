<template>
  <section ref="sectionRef" class="w-full bg-background py-24 md:py-32 border-b border-border overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 md:px-8">
      <div class="flex flex-col md:flex-row items-start gap-12 md:gap-24">
        <div class="w-full md:w-1/3">
          <span class="text-[10px] font-bold tracking-[0.3em] uppercase text-text-secondary block mb-4">Philosophy</span>
        </div>
        <div class="w-full md:w-2/3">
          <h2 
            class="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-accent uppercase fade-in-up"
            :class="{ 'visible': isVisible }"
          >
            We believe in <br class="hidden md:block"/> designing spaces that balance function, <br class="hidden md:block"/> clarity, and identity.
          </h2>
          <p 
            class="mt-12 text-sm md:text-base text-text-secondary max-w-xl leading-relaxed fade-in-up delay-200"
            :class="{ 'visible': isVisible }"
          >
            At ASA RONA, our approach is centered on an unwavering commitment to quality and the belief that the spaces we inhabit shape the way we experience daily life.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
      } else {
        isVisible.value = false // repeatable
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
