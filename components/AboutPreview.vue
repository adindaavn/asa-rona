<template>
  <section ref="sectionRef" class="w-full bg-surface py-24 md:py-32 border-b border-border overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
      <div class="w-full md:w-1/2 fade-in-up" :class="{ 'visible': isVisible }">
        <h2 class="text-[10px] font-bold tracking-[0.3em] uppercase text-text-secondary mb-10 block">About Studio</h2>
        <div class="text-[clamp(1.5rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-accent mb-10 uppercase">
          ASA means hope. <br/>
          RONA represents tone.
        </div>
        <p class="text-xs md:text-sm tracking-wide text-text-secondary leading-relaxed max-w-md mb-12">
          Together, ASA RONA is about creating spaces that carry intention, emotion, and identity. We craft environments that foster tranquility and inspire the people within them.
        </p>
        <NuxtLink to="/about" class="text-[10px] font-bold tracking-widest uppercase border-b border-accent pb-2 hover:text-accent/60 transition-colors">
          Discovery more [ → ]
        </NuxtLink>
      </div>
      <div class="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-muted relative overflow-hidden fade-in-up delay-100" :class="{ 'visible': isVisible }">
        <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=1400" alt="Atmospheric interior detail" class="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" />
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
.delay-100 { transition-delay: 0.1s; }
</style>
