<template>
  <section ref="sectionRef" class="max-w-[1440px] mx-auto px-8 py-24 md:py-32 border-t border-border overflow-hidden">
    <div class="mb-20 flex flex-col items-start fade-in-up" :class="{ 'visible': isVisible }">
      <span class="text-[10px] uppercase font-bold tracking-[0.3em] text-text-secondary mb-10 block">Client Perspectives</span>
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1]">What our <br/> clients say</h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="(t, i) in testimonials" 
        :key="t.author" 
        class="fade-in-up group bg-[#F9F9F9] p-10 rounded-2xl flex flex-col h-[420px] transition-all duration-700 ease-out hover:bg-white border border-transparent hover:border-border/50 cursor-pointer"
        :class="{ 'visible': isVisible }"
        :style="{ transitionDelay: `${i * 150}ms` }"
      >
        <div class="flex justify-between items-start mb-10">
          <img :src="t.avatar" alt="Avatar" class="w-12 h-12 rounded-full object-cover grayscale" />
          <div class="flex items-center px-4 py-2 bg-white rounded-full border border-border shadow-sm text-[9px] font-bold uppercase tracking-widest text-text-secondary">
            {{ t.company }}
          </div>
        </div>
        <QuoteIcon class="w-6 h-6 text-border mb-8" />
        <p class="text-sm md:text-base font-medium leading-relaxed mb-auto italic text-text-primary">
          "{{ t.quote }}"
        </p>
        <div class="mt-10 pt-8 border-t border-border/40">
          <h4 class="text-[10px] font-bold uppercase tracking-[0.2em]">{{ t.author }}</h4>
          <span class="text-[9px] uppercase text-text-secondary block mt-1 tracking-widest">{{ t.role }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { QuoteIcon } from 'lucide-vue-next'

const sectionRef = ref(null)
const isVisible = ref(false)

const testimonials = [
  {
    quote: "ASA RONA transformed our downtown loft into a sanctuary. Their attention to lighting and material texture is unparalleled.",
    author: "Elena Rostov",
    role: "Private Client",
    company: "Arch Digest",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The meticulous balance of white space and warm elements they introduced completely redefined our daily living experience.",
    author: "James Sterling",
    role: "Private Client",
    company: "Sterling Co",
    avatar: "https://i.pravatar.cc/150?img=33"
  },
  {
    quote: "A studio that truly understands how the absence of clutter brings forth mental clarity. Every detail was intentional.",
    author: "Sarah Lin",
    role: "Private Client",
    company: "Lin Estate",
    avatar: "https://i.pravatar.cc/150?img=68"
  }
]

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
