<template>
  <footer class="w-full bg-background pt-24 pb-8 overflow-hidden font-sans border-t border-border">
    <div class="max-w-[1440px] mx-auto px-8">
      
      <!-- Restored Original Text, applied Reference aesthetic structure -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 pb-12">
        
        <!-- Brand -->
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold tracking-[0.2em] mb-8 max-w-[250px] uppercase">
            ASA RONA
          </h3>
          <p class="text-xs text-text-secondary max-w-[250px] leading-relaxed uppercase tracking-widest">Elevating interior spaces with minimalist design and purposeful aesthetic.</p>
        </div>

        <div class="md:col-span-1">
          <h4 class="text-[10px] font-bold uppercase tracking-widest mb-6 border-b border-border pb-2 w-fit">Menu</h4>
          <ul class="text-[10px] space-y-4 text-text-primary uppercase tracking-widest">
            <li><NuxtLink to="/" class="hover:text-text-secondary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/projects" class="hover:text-text-secondary transition-colors">Projects</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-text-secondary transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-text-secondary transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-1">
          <h4 class="text-[10px] font-bold uppercase tracking-widest mb-6 border-b border-border pb-2 w-fit">Socials</h4>
          <div class="flex space-x-4 text-text-primary">
            <a href="#" class="hover:text-text-secondary transition-colors" aria-label="Instagram">
              <InstagramIcon class="w-5 h-5" />
            </a>
            <a href="#" class="hover:text-text-secondary transition-colors" aria-label="Pinterest">
              <!-- Using standard inline SVG since lucide doesn't have Pinterest officially -->
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3Z"/><path d="m11 10-2.5 6"/><path d="m16 10-2.5 6"/><circle cx="12" cy="10" r="1"/>
              </svg>
            </a>
            <a href="#" class="hover:text-text-secondary transition-colors" aria-label="LinkedIn">
              <LinkedinIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-secondary border-t border-border pt-8">
        <p>&copy; {{ new Date().getFullYear() }} ASA RONA Studio</p>
        
        <div class="flex flex-wrap gap-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-text-primary transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-text-primary transition-colors">Terms of Service</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { InstagramIcon, LinkedinIcon } from 'lucide-vue-next'
</script>
