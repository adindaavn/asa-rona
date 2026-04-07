<template>
  <div class="relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white pb-0">
    
    <!-- HERO INTRO -->
    <section class="w-full bg-background pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-start gap-8 fade-in-up">
        <h1 class="text-[clamp(3.5rem,8.5vw,6rem)] font-bold tracking-tighter leading-[0.85] text-accent uppercase">
          PROJECTS
        </h1>
        <p class="text-xs md:text-sm tracking-widest text-text-secondary max-w-lg leading-relaxed uppercase">
          A selection of spaces designed with intention and clarity.
        </p>
      </div>
    </section>

    <!-- CATEGORIES (PARALLAX BLOCKS) -->
    <div class="w-full bg-black">
      <NuxtLink v-for="(category, index) in categories" :key="category.id" :to="`/projects/${category.id}`" class="group relative block w-full h-[60vh] md:h-[75vh] overflow-hidden bg-black text-white cursor-pointer fade-in-up border-b border-white/10 last:border-0" :style="{ transitionDelay: `${(index % 3) * 100}ms` }">
        
        <!-- Parallax Background Image -->
        <!-- bg-fixed provides genuine, performant parallax in CSS -->
        <div class="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105" :style="{ backgroundImage: `url(${category.image})` }"></div>
        
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20"></div>

        <!-- Content Overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-700 group-hover:scale-110">
          <h2 class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase">{{ category.name }}</h2>
          <div class="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-out flex items-center gap-2">
            <span class="text-xs tracking-widest uppercase font-bold">Explore</span>
            <ArrowRightIcon class="w-4 h-4 ml-2" />
          </div>
        </div>
        
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { ArrowRightIcon } from 'lucide-vue-next'
import { useProjects } from '~/composables/useProjects'

const { getCategories } = useProjects()
const categories = getCategories()

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}
.fade-in-up.visible {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
