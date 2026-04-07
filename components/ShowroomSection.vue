<template>
  <section class="w-full py-24 md:py-32 bg-background border-t border-border overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 md:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <!-- Left Side: Information -->
        <div class="w-full lg:w-1/2 fade-in-up">
          <h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-8 md:mb-12">Visit Our Showroom</h2>
          <div class="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight leading-[1.1] text-accent mb-10 uppercase">
            Experience our designs <br/>in person. We’d love <br/>to welcome you.
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div>
              <h4 class="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4 border-b border-border pb-2 w-fit">Location</h4>
              <p class="text-xs md:text-sm tracking-wide text-text-primary leading-relaxed">
                Jl. Senopati No. 8B,<br/>
                Kebayoran Baru, Jakarta Selatan<br/>
                12190, Indonesia
              </p>
            </div>
            
            <div>
              <h4 class="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4 border-b border-border pb-2 w-fit">Hours & Contact</h4>
              <p class="text-xs md:text-sm tracking-wide text-text-primary leading-relaxed mb-1">
                Mon – Sat: 10:00 – 18:00
              </p>
              <p class="text-xs md:text-sm tracking-wide text-text-primary leading-relaxed">
                +62 21 555 0123
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side: Interactive Map -->
        <div class="w-full lg:w-1/2 fade-in-up delay-100">
          <div class="relative w-full aspect-square md:aspect-video lg:aspect-square bg-muted rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273678077421!2d106.8048227750377!3d-6.227602093760467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14f63c87fdf%3A0x600f1352e8964896!2sJl.%20Senopati%2C%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1712156800000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="ASA RONA Showroom Location"
              class="grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700 ease-in-out"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

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
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fade-in-up.visible {
  opacity: 1;
  transform: translate(0, 0);
}
.delay-100 {
  transition-delay: 100ms;
}
</style>
