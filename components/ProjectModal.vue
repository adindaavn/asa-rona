<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen && project" class="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="close"></div>
        
        <!-- Modal Content Container -->
        <div class="relative w-[95vw] h-[95vh] md:w-[90vw] md:h-[90vh] bg-surface rounded-sm flex flex-col shadow-2xl overflow-hidden scale-100 modal-card border border-border">
          
          <!-- Close Button -->
          <button @click="close" class="absolute top-6 right-6 z-10 w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 text-black shadow-sm group">
            <XIcon class="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
          </button>

          <!-- Top: Image Gallery (Horizontal Scroll) -->
          <div class="w-full h-1/2 md:h-2/3 bg-muted overflow-x-auto flex snap-x snap-mandatory hide-scrollbar">
            <div v-for="(img, idx) in project.images" :key="idx" class="h-full min-w-full md:min-w-[80%] lg:min-w-[70%] snap-center flex-shrink-0 relative">
              <img :src="img" :alt="project.title" class="w-full h-full object-cover transition-all duration-1000" loading="lazy" />
            </div>
          </div>

          <!-- Bottom: Details -->
          <div class="w-full h-1/2 md:h-1/3 p-8 md:p-12 overflow-y-auto bg-background flex flex-col lg:flex-row justify-between gap-12">
            <!-- Title & Desc -->
            <div class="lg:w-2/3">
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase text-accent mb-6">{{ project.title }}</h2>
              <p class="text-sm md:text-base text-text-secondary leading-relaxed tracking-wide max-w-2xl">
                {{ project.description }}
              </p>
            </div>
            
            <!-- Metadata -->
            <div class="lg:w-1/3 flex flex-col gap-6 pt-2 lg:pt-0 lg:border-l border-border lg:pl-12">
              <div v-if="project.roomSize && project.roomSize !== 'N/A'">
                <p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1">Room Size</p>
                <p class="text-sm font-medium tracking-wide text-accent">{{ project.roomSize }}</p>
              </div>
              <div v-if="project.location">
                <p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1">Location</p>
                <p class="text-sm font-medium tracking-wide text-accent">{{ project.location }}</p>
              </div>
              <div v-if="project.date">
                <p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1">Date</p>
                <p class="text-sm font-medium tracking-wide text-accent">{{ project.date }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { XIcon } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

// Lock scroll when open
watch(() => props.isOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Vue Transition Classes */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-card {
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.modal-leave-active .modal-card {
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
  transform: scale(0.95);
}
</style>
