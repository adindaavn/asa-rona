<template>
  <div class="relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white pb-0">
    <!-- HERO -->
    <section class="w-full bg-background pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-center text-center fade-in-up">
        <h1 class="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tighter leading-[0.85] text-accent uppercase max-w-5xl">
          Designing Spaces With Purpose and Emotion
        </h1>
        <p class="mt-8 text-xs md:text-sm tracking-wide text-text-secondary max-w-xl leading-relaxed uppercase">
          We believe that interior design is more than arranging furniture. It's about shaping the way you experience your daily life.
        </p>
      </div>
      <div class="w-full px-4 md:px-8 mt-16 md:mt-24 fade-in-up delay-200 h-[50vh] md:h-[65vh]">
        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2600" alt="Minimalist interior" class="w-full h-full object-cover object-center" />
      </div>
    </section>

    <!-- BRAND MEANING -->
    <section class="w-full py-24 md:py-32 bg-surface">
      <div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div class="w-full lg:w-1/2 fade-in-up">
          <h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-8 md:mb-12">The Meaning</h2>
          <div class="text-[clamp(1.5rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-accent mb-10">
            <span class="block mb-2 md:mb-4">ASA means hope.</span>
            <span class="block text-text-secondary mb-2 md:mb-4">RONA represents tone,</span>
            <span class="block text-text-secondary">atmosphere, and feeling.</span>
          </div>
          <p class="text-xs md:text-sm tracking-wide text-text-secondary leading-relaxed max-w-md">
            Together, ASA RONA is about creating spaces that carry intention, emotion, and identity. We craft environments that foster tranquility and inspire the people within them.
          </p>
        </div>
        <div class="w-full lg:w-1/2 aspect-square md:aspect-[4/5] bg-muted relative overflow-hidden fade-in-up delay-100">
          <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=1400" alt="Atmospheric interior detail" class="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY / DESIGN APPROACH -->
    <section class="w-full py-24 md:py-40 bg-background border-t border-border">
      <div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-center text-center fade-in-up">
        <h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-12 md:mb-16">Our Philosophy</h2>
        <p class="text-xl md:text-3xl lg:text-5xl font-medium tracking-tight leading-snug lg:leading-[1.15] text-accent max-w-5xl">
          We seek the perfect balance between function and emotion. Our approach relies on simplicity and intentional design, ensuring every space provides comfort, clarity, and a strong sense of identity.
        </p>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="w-full py-24 md:py-32 bg-surface">
      <div class="max-w-[1440px] mx-auto px-6 md:px-8">
        <div class="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 fade-in-up">
          <h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase">Why Choose Us</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          <div class="group cursor-default fade-in-up" v-for="(reason, i) in reasons" :key="i" :style="{ transitionDelay: `${i * 100}ms` }">
            <div class="h-[1px] w-full bg-border mb-8 group-hover:bg-accent transition-colors duration-500"></div>
            <h3 class="text-sm md:text-base font-bold text-accent mb-4 tracking-wider uppercase">{{ reason.title }}</h3>
            <p class="text-xs text-text-secondary leading-relaxed tracking-wide">{{ reason.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="w-full py-24 md:py-32 bg-background border-t border-border">
      <div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div class="lg:w-1/3 fade-in-up">
          <h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-8 lg:sticky lg:top-32">Our Process</h2>
        </div>
        <div class="lg:w-2/3 flex flex-col">
          <div v-for="(step, i) in steps" :key="i" class="flex flex-col md:flex-row py-12 md:py-16 border-t border-border group last:border-b fade-in-up" :style="{ transitionDelay: `${(i % 3) * 100}ms` }">
            <div class="text-[10px] font-bold text-text-secondary w-16 mb-4 md:mb-0 pt-1 tracking-widest">0{{ i + 1 }}</div>
            <div class="flex-1 transition-transform duration-500 md:group-hover:translate-x-4">
              <h3 class="text-lg md:text-xl font-bold text-accent mb-4 tracking-tight uppercase group-hover:text-text-secondary transition-colors">{{ step.title }}</h3>
              <p class="text-xs md:text-sm text-text-secondary leading-relaxed tracking-wide max-w-lg">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SHOWROOM (NEW) -->
    <ShowroomSection />

    <!-- CTA -->
    <section class="w-full py-32 md:py-48 bg-black text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <!-- subtle texture or noise if any -->
      </div>
      <div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-center text-center relative z-10 fade-in-up">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 uppercase leading-[0.9]">Let's create a space<br />that reflects you.</h2>
        <NuxtLink to="/contact" class="group flex items-center justify-center px-10 py-4 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500">
          Contact Us
          <ArrowRightIcon class="w-4 h-4 ms-3 transition-transform duration-500 group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { ArrowRightIcon } from 'lucide-vue-next'

const reasons = [
  { title: "Thoughtful Design", desc: "Every detail has purpose. We design with intent, ensuring spaces are as functional as they are beautiful." },
  { title: "Client-Centered", desc: "Designed around your lifestyle. We listen closely to translate your personal story into physical form." },
  { title: "Timeless Aesthetic", desc: "Not trend-driven. We create enduring environments that feel fresh and relevant for years to come." },
  { title: "End-to-End Service", desc: "From initial concept to final execution and styling, we seamlessly manage every phase of the project." }
]

const steps = [
  { title: "Consultation", desc: "We begin by understanding your needs, lifestyle, and vision to establish a clear direction for the project." },
  { title: "Concept Development", desc: "Crafting moodboards, layout ideas, and finding the perfect balance of materials to define the aesthetic." },
  { title: "Design Planning", desc: "Selecting materials, refining details, and creating comprehensive technical drawings for execution." },
  { title: "Execution", desc: "Managing the build and installation process with trusted craftsmen to ensure our vision is realized perfectly." },
  { title: "Final Styling", desc: "Adding the finishing touches—art, objects, and textiles—to bring soul and character to your new space." }
]

onMounted(() => {
  // Simple intersection observer for fade-in animations
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
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fade-in-up.visible {
  opacity: 1;
  transform: translate(0, 0);
}
.delay-100 {
  transition-delay: 100ms;
}
.delay-200 {
  transition-delay: 200ms;
}
</style>
