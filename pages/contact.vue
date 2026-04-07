<template>
  <div class="relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white min-h-screen">
    
    <!-- Hero Section -->
    <section class="max-w-[1440px] mx-auto px-6 md:px-8 pt-32 pb-16 md:pb-24 fade-in-up">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        <!-- Left: Static Content -->
        <div class="lg:w-1/3 flex flex-col justify-start">
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.85] text-accent mb-8">
            Let’s Design Your Space
          </h1>
          <p class="text-xs md:text-sm tracking-widest text-text-secondary uppercase leading-relaxed max-w-sm mb-12">
            Tell us about your vision — we’ll help bring it to life with clarity and intention.
          </p>
          
          <!-- Reassurance / Trust Marker -->
          <div class="mt-auto space-y-8 pt-12 border-t border-border">
            <div>
              <p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1">Inquiry Response</p>
              <p class="text-xs font-medium tracking-wide">We typically respond within 24 hours.</p>
            </div>
            <div>
              <p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1">Contact Details</p>
              <a href="mailto:hello@asarona.com" class="block text-xs font-medium tracking-wide hover:underline">hello@asarona.com</a>
              <a href="tel:+1234567890" class="block text-xs font-medium tracking-wide mt-1">+1 (234) 567 890</a>
            </div>
          </div>
        </div>

        <!-- Right: Multi-Step Form -->
        <div class="lg:w-2/3 min-h-[500px] flex flex-col relative bg-surface p-8 md:p-12 border border-border shadow-sm overflow-hidden">
          
          <div v-if="!isSubmitted" class="w-full h-full flex flex-col">
            <!-- Progress Indicator -->
            <div class="flex items-center justify-between mb-12">
              <span class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase">Step {{ currentStep }} of 4</span>
              <div class="flex gap-1">
                <div v-for="s in 4" :key="s" class="h-1 w-8 transition-colors duration-500" :class="s <= currentStep ? 'bg-black' : 'bg-border'"></div>
              </div>
            </div>

            <!-- Form Steps with Transitions -->
            <div class="flex-1 overflow-hidden relative">
              <Transition name="fade-slide" mode="out-in">
                
                <!-- STEP 1: Basic Info -->
                <div v-if="currentStep === 1" key="step1" class="space-y-12">
                  <h2 class="text-2xl md:text-3xl font-bold tracking-tight uppercase">Who are we designing for?</h2>
                  <div class="space-y-12 max-w-md">
                    <div class="group relative">
                      <input type="text" v-model="formData.name" placeholder="Name" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors" />
                    </div>
                    <div class="group relative">
                      <input type="email" v-model="formData.email" placeholder="Email Address" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors" />
                    </div>
                    <div class="group relative">
                      <input type="tel" v-model="formData.phone" placeholder="Phone / WhatsApp" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors" />
                    </div>
                  </div>
                </div>

                <!-- STEP 2: Project Type -->
                <div v-else-if="currentStep === 2" key="step2" class="space-y-12">
                  <h2 class="text-2xl md:text-3xl font-bold tracking-tight uppercase">What kind of space?</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button v-for="type in projectTypes" :key="type.id" 
                      @click="formData.projectType = type.id" 
                      class="flex flex-col items-center justify-center p-8 border transition-all duration-300 gap-4 group" 
                      :class="formData.projectType === type.id ? 'bg-black text-white border-black shadow-lg scale-[1.02]' : 'bg-background hover:bg-surface border-border hover:border-black'">
                      <component :is="type.icon" class="w-8 h-8 transition-transform group-hover:scale-110" />
                      <span class="text-[10px] font-bold tracking-[0.2em] uppercase">{{ type.name }}</span>
                    </button>
                  </div>
                </div>

                <!-- STEP 3: Project Details -->
                <div v-else-if="currentStep === 3" key="step3" class="space-y-12">
                  <h2 class="text-2xl md:text-3xl font-bold tracking-tight uppercase">Tell us about your vision.</h2>
                  <div class="space-y-10">
                    <textarea v-model="formData.description" placeholder="Short description of your project..." rows="3" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors resize-none"></textarea>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-4">Approximate Room Size (Optional)</p>
                        <input type="text" v-model="formData.roomSize" placeholder="e.g. 50 sq m" class="w-full bg-transparent border-b border-border py-2 outline-none tracking-wide focus:border-black transition-colors" />
                      </div>
                      <div>
                        <p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-4">Budget Range (Optional)</p>
                        <select v-model="formData.budget" class="w-full bg-transparent border-b border-border py-2 outline-none tracking-wide focus:border-black transition-colors appearance-none cursor-pointer">
                          <option value="" disabled>Select range</option>
                          <option value="compact">Up to $10,000</option>
                          <option value="standard">$10,000 - $30,000</option>
                          <option value="premium">$30,000 - $100,000</option>
                          <option value="luxury">$100,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- STEP 4: Location & Timeline -->
                <div v-else-if="currentStep === 4" key="step4" class="space-y-12">
                  <h2 class="text-2xl md:text-3xl font-bold tracking-tight uppercase">Location & Timeline</h2>
                  <div class="space-y-12 max-w-md">
                    <div class="group relative">
                      <input type="text" v-model="formData.location" placeholder="City / Address" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors" />
                    </div>
                    <div>
                      <p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-4">Desired Timeline</p>
                      <select v-model="formData.timeline" class="w-full bg-transparent border-b border-border py-2 outline-none tracking-wide focus:border-black transition-colors appearance-none cursor-pointer">
                        <option value="" disabled>Select timeline</option>
                        <option value="urgent">As soon as possible</option>
                        <option value="standard">Next 3-6 months</option>
                        <option value="planning">Just browsing / next year</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Navigation Controls -->
            <div class="mt-12 flex items-center justify-between border-t border-border pt-8">
              <button @click="prevStep" v-show="currentStep > 1" class="text-[10px] font-bold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors flex items-center">
                <ArrowLeftIcon class="w-3 h-3 mr-2" /> Back
              </button>
              <div v-show="currentStep === 1"></div> <!-- spacer -->
              
              <button v-if="currentStep < 4" @click="nextStep" class="group flex items-center justify-center px-10 py-4 rounded-full border border-black bg-white text-black text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                Continue <ArrowRightIcon class="w-4 h-4 ms-2 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button v-else @click="submitForm" :disabled="isSubmitting" class="group flex items-center justify-center px-10 py-4 rounded-full bg-black text-white text-[10px] font-bold tracking-widest uppercase hover:bg-transparent hover:text-black border border-black transition-all duration-300 disabled:opacity-50">
                <span v-if="!isSubmitting">Start Your Project</span>
                <span v-else class="flex items-center"><Loader2Icon class="w-4 h-4 mr-2 animate-spin" /> Submitting</span>
              </button>
            </div>
          </div>

          <!-- SUCCESS STATE -->
          <div v-else class="w-full h-full flex flex-col items-center justify-center text-center py-20 fade-in-up">
            <div class="w-20 h-20 rounded-full border border-black flex items-center justify-center mb-8">
              <CheckIcon class="w-10 h-10 text-black animate-scale-up" />
            </div>
            <h2 class="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Thank You.</h2>
            <p class="text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-12 max-w-sm">We’ve received your inquiry. Our team will get back to you shortly to discuss your vision.</p>
            <NuxtLink to="/" class="group flex items-center justify-center px-10 py-4 rounded-full border border-border text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
              Return Home
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  ArrowRightIcon, 
  ArrowLeftIcon, 
  ChefHatIcon, 
  BedIcon, 
  SofaIcon, 
  BoxIcon,
  CheckIcon,
  Loader2Icon
} from 'lucide-vue-next'

const currentStep = ref(1)
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const formData = ref({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  description: '',
  roomSize: '',
  budget: '',
  location: '',
  timeline: ''
})

const projectTypes = [
  { id: 'kitchen', name: 'Kitchen', icon: ChefHatIcon },
  { id: 'bedroom', name: 'Bedroom', icon: BedIcon },
  { id: 'living', name: 'Living Room', icon: SofaIcon },
  { id: 'furniture', name: 'Furniture', icon: BoxIcon }
]

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate 1s loading state
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
  animateSuccess()
}

const animateSuccess = () => {
  // Simple checkmark pop-in logic if needed
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

/* Transition for steps */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

@keyframes scale-up {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-up {
  animation: scale-up 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* Base bottom border transitions */
input:focus ~ .line,
select:focus ~ .line,
textarea:focus ~ .line {
  width: 100%;
}
</style>
