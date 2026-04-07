<template>
  <nav 
    class="w-full z-[100] transition-all duration-300 ease-in-out border-b"
    :class="[
      isHome ? 'fixed top-0' : 'relative',
      isScrolled || !isHome 
        ? 'bg-white/80 backdrop-blur-md border-border py-4 shadow-sm' 
        : 'bg-transparent border-transparent py-6 shadow-none'
    ]"
  >
    <div class="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-8 h-10">
      
      <!-- Left Side (Mobile Burger / Desktop Links) -->
      <div class="flex flex-1 justify-start items-center">
        <!-- Desktop Links -->
        <div 
          class="hidden md:flex space-x-12 transition-colors duration-300"
          :class="isScrolled || !isHome ? 'text-black' : 'text-white'"
        >
          <NuxtLink to="/" exact-active-class="font-bold opacity-100" class="text-xs font-medium tracking-widest uppercase flex items-center opacity-70 hover:opacity-100 transition-opacity">HOME</NuxtLink>
          <NuxtLink to="/about" active-class="font-bold opacity-100" class="text-xs font-medium tracking-widest uppercase flex items-center opacity-70 hover:opacity-100 transition-opacity">ABOUT</NuxtLink>
          <NuxtLink to="/projects" active-class="font-bold opacity-100" class="text-xs font-medium tracking-widest uppercase flex items-center opacity-70 hover:opacity-100 transition-opacity">PROJECT</NuxtLink>
        </div>
        <!-- Mobile Hamburger -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden transition-colors duration-300 p-2" 
          :class="isScrolled || !isHome ? 'text-black' : 'text-white'"
          aria-label="Menu"
        >
          <XIcon v-if="isOpen" class="w-6 h-6" />
          <MenuIcon v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Right Logo -->
      <div class="flex justify-end items-center">
        <NuxtLink to="/" class="flex items-center group">
          <span 
            class="text-lg font-bold tracking-[0.2em] uppercase transition-colors duration-300"
            :class="isScrolled || !isHome ? 'text-accent' : 'text-white'"
          >ASA RONA</span>
        </NuxtLink>
      </div>

    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      v-show="isOpen" 
      class="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-2xl flex flex-col items-center py-12 space-y-10 z-40 transition-all duration-300 text-black"
    >
      <NuxtLink to="/" @click="isOpen = false" exact-active-class="!font-bold" class="text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">HOME</NuxtLink>
      <NuxtLink to="/about" @click="isOpen = false" active-class="!font-bold" class="text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">ABOUT</NuxtLink>
      <NuxtLink to="/projects" @click="isOpen = false" active-class="!font-bold" class="text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">PROJECT</NuxtLink>
      <NuxtLink to="/contact" @click="isOpen = false" class="text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">CONTACT</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { MenuIcon, XIcon } from 'lucide-vue-next'

const isOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const isHome = computed(() => route.path === '/')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
