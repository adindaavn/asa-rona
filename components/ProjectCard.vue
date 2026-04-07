<template>
  <div class="relative group cursor-pointer overflow-hidden break-inside-avoid mb-6 rounded-sm w-full" @click="emit('openModal', project)">
    <!-- Container preserving the aspect ratio naturally through the image, break-inside-avoid prevents cutting in masonry -->
    
    <div class="w-full h-full relative overflow-hidden bg-muted">
      <!-- Main Image -->
      <img :src="project.images[0]" :alt="project.title" class="w-full object-cover transition-all duration-[1s] ease-out group-hover:scale-105" loading="lazy" />
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-6 md:p-8">
        <h3 class="text-white text-lg md:text-xl font-bold tracking-tight uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {{ project.title }}
        </h3>
        <p class="text-white/70 text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
          Click to View
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['openModal'])
</script>
