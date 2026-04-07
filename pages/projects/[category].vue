<template>
  <div class="relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white min-h-screen">
    
    <!-- HEADER -->
    <section class="max-w-[1440px] mx-auto px-6 md:px-8 pt-32 pb-16 fade-in-up">
      <NuxtLink to="/projects" class="inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors mb-12 group">
        <ArrowLeftIcon class="w-3 h-3 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Projects
      </NuxtLink>
      
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase text-accent">
        {{ formattedCategoryName }}
      </h1>
      <p v-if="filteredProjects.length === 0" class="mt-8 text-sm text-text-secondary tracking-widest uppercase">
        No projects found.
      </p>
      <p v-else class="mt-4 text-xs md:text-sm text-text-secondary tracking-widest uppercase">
        {{ filteredProjects.length }} Project{{ filteredProjects.length !== 1 ? 's' : '' }}
      </p>
    </section>

    <!-- MASONRY GRID -->
    <!-- CSS Columns provide a lightweight masonry layout. `columns-1 md:columns-2 lg:columns-3` coupled with `break-inside-avoid` in the children items. -->
    <section class="max-w-[1440px] mx-auto px-6 md:px-8 pb-32">
      <div v-if="filteredProjects.length > 0" class="columns-1 md:columns-2 lg:columns-3 gap-6 w-full fade-in-up delay-100">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :project="project" 
          @open-modal="handleOpenModal"
        />
      </div>
    </section>

    <!-- PROJECT MODAL -->
    <ProjectModal 
      :is-open="isModalOpen" 
      :project="selectedProject" 
      @close="handleCloseModal" 
    />

  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon } from 'lucide-vue-next'
import { useProjects } from '~/composables/useProjects'
import ProjectCard from '~/components/ProjectCard.vue'
import ProjectModal from '~/components/ProjectModal.vue'

const route = useRoute()
const categoryParam = route.params.category

const { getProjectsByCategory } = useProjects()

const filteredProjects = computed(() => {
  return getProjectsByCategory(categoryParam)
})

const formattedCategoryName = computed(() => {
  if (!categoryParam || categoryParam === 'all') return 'All Projects'
  return categoryParam.replace('-', ' ')
})

// Modal State
const isModalOpen = ref(false)
const selectedProject = ref(null)

const handleOpenModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const handleCloseModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedProject.value = null
  }, 500) // Clear after modal out transition
}

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
.delay-100 {
  transition-delay: 100ms;
}
</style>
