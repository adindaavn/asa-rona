<template>
  <section class="w-full bg-beige py-24 border-y border-border">
    <div class="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
      
      <!-- Reference logic: Split layout -->
      <div>
        <div class="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-text-secondary mb-8">
          <span class="w-2 h-2 rounded-full border border-text-secondary inline-block bg-background"></span>
          <span>Support</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight max-w-sm uppercase leading-tight">Frequently Asked Questions</h2>
      </div>

      <!-- Original Logic: Smooth accordion -->
      <div class="flex flex-col space-y-4">
        <div v-for="(item, index) in faqs" :key="index" class="border-t border-[#D0D0C8] pt-6 flex flex-col group cursor-pointer" @click="toggle(index)">
          <div class="flex justify-between items-center w-full group-hover:opacity-75 transition-opacity mb-4">
            <span class="text-lg text-text-primary pr-8 font-medium">{{ item.question }}</span>
            <div class="w-8 h-8 rounded-full border border-[#D0D0C8] flex items-center justify-center flex-shrink-0 transition-transform duration-300" :class="{ 'rotate-45': activeIndex === index }">
              <PlusIcon class="w-4 h-4 text-text-primary" />
            </div>
          </div>
          <!-- Original smooth open/close expansion -->
          <div 
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :class="{ 'max-h-0 opacity-0': activeIndex !== index, 'max-h-[200px] opacity-100': activeIndex === index }"
          >
            <p class="text-sm text-text-secondary leading-relaxed pr-12 pb-4">{{ item.answer }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { PlusIcon } from 'lucide-vue-next'

const activeIndex = ref(null)
const toggle = (i) => activeIndex.value = activeIndex.value === i ? null : i

const faqs = [
  {
    question: "Do you offer full-service interior design?",
    answer: "Yes, we handle everything from spatial planning to custom furniture sourcing and the final styling of the environment."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Depending on the scale, projects range from 3 to 9 months. Architectural renovations may extend further."
  },
  {
    question: "Can we incorporate our existing furniture?",
    answer: "Absolutely. We curate a cohesive aesthetic that aligns your cherished pieces with our minimalistic approach."
  },
  {
    question: "Do you operate internationally?",
    answer: "Yes, while based locally, we are equipped to handle bespoke projects around the world remotely and with limited travel."
  }
]
</script>
