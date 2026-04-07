<template>
  <section ref="heroSection" class="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0a0a0a]">
    
    <!-- LAYER 1: Background Base (Refined Cropped Composition) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <img 
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2600" 
        alt="Architectural Backdrop" 
        class="w-full h-full object-cover origin-center transition-transform duration-[30s] ease-linear scale-animation"
        :style="{ transform: `scale(${1.15 + scrollProgress * 0.1})` }"
      />
      <!-- Mood Gradients -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/40 z-10"></div>
      <div class="absolute inset-0 bg-black/20 z-10"></div>
    </div>

    <!-- LAYER 2: Editorial Typography (Controlled Scale & Balance) -->
    <div class="absolute inset-x-0 top-[15vh] bottom-[25vh] z-20 pointer-events-none flex flex-col justify-center">
      
      <!-- Top Line: Slightly Offset -->
      <div class="w-full px-8 md:px-[10%] overflow-hidden">
        <h1 
          class="text-white text-[clamp(2.5rem,8vw,10rem)] font-bold tracking-tight leading-[0.9] uppercase transition-all duration-1000 ease-out"
          :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'"
        >
          Designing <br class="md:hidden"/> Spaces
        </h1>
      </div>

      <!-- Center Line: Offset Balance -->
      <div class="w-full flex justify-end px-8 md:px-[15%] my-4 md:my-8">
        <h2 
          class="text-white/90 text-[clamp(2.5rem,8vw,10rem)] font-bold tracking-tight leading-[0.9] uppercase transition-all duration-1000 delay-300 ease-out"
          :class="isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'"
        >
          With Purpose
        </h2>
      </div>

      <!-- Bottom Line: Intentional Presence -->
      <div class="w-full px-8 md:px-[12%]">
        <h3 
          class="text-white text-[clamp(2.5rem,8vw,10rem)] font-bold tracking-tight leading-[0.9] uppercase transition-all duration-1000 delay-500 ease-out"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'"
        >
          And Emotion
        </h3>
      </div>

    </div>

    <!-- LAYER 3: Framed Editorial Element (Subtle Framing) -->
    <div 
      class="absolute top-[20%] right-[10%] md:right-[20%] z-30 w-[100px] md:w-[220px] aspect-[3/4] border border-white/20 p-1 bg-black/20 backdrop-blur-sm transition-all duration-1000 delay-700 pointer-events-none fade-in-up"
      :class="{ 'visible': isVisible }"
      :style="{ transform: `translateY(${scrollProgress * -60}px)` }"
    >
      <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover grayscale brightness-90 contrast-125" alt="Detail Frame" />
    </div>

    <!-- LAYER 4: Micro Text & Subtle CTA (Refined and balanced) -->
    <div class="absolute bottom-12 md:bottom-20 right-8 md:right-20 z-40 flex flex-col items-end text-right max-w-[320px] transition-all duration-1000 delay-1000" :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'">
      <p class="text-white/70 text-[10px] md:text-xs tracking-widest leading-relaxed uppercase mb-10">
        Designing environments that balance tranquility, <br class="hidden md:block"/> function, and architectural identity.
      </p>
      
      <NuxtLink to="/projects" class="group flex items-center text-white text-[10px] md:text-xs font-bold tracking-widest uppercase hover:text-white/60 transition-colors">
        Explore Projects 
        <span class="ms-3 transition-transform duration-500 group-hover:translate-x-2">[ → ]</span>
      </NuxtLink>
    </div>

    <!-- Signature Element ✦ (Floating naturally) -->
    <div class="absolute top-[35%] left-[5%] z-50 text-white/30 hidden md:block animate-pulse-slow">
      <span class="text-2xl font-light">✦</span>
    </div>

    <!-- Minimal Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
      <span class="text-[9px] text-white/40 tracking-[0.3em] uppercase">Scroll</span>
      <div class="h-8 w-[1px] bg-white/10 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-scroll-line-fast"></div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroSection = ref(null)
const isVisible = ref(false)
const scrollProgress = ref(0)

const handleScroll = () => {
  if (!heroSection.value) return
  const rect = heroSection.value.getBoundingClientRect()
  const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height)))
  scrollProgress.value = progress
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  }, { threshold: 0.05 })

  if (heroSection.value) {
    observer.observe(heroSection.value)
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  setTimeout(() => { if (!isVisible.value) isVisible.value = true }, 200)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scale-animation {
  animation: kenBurnsDramatic 60s linear infinite alternate;
}

@keyframes kenBurnsDramatic {
  from { transform: scale(1.2) translate(0, 0); }
  to { transform: scale(1.35) translate(2%, 2%); }
}

@keyframes scroll-line-fast {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}

.animate-scroll-line-fast {
  animation: scroll-line-fast 1.5s infinite linear;
}

.animate-pulse-slow {
  animation: pulse-slow 4s infinite ease-in-out;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

.italic-alt {
  font-style: normal; /* keeping as sans-serif dominant */
}

/* Custom fade for the frame */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
