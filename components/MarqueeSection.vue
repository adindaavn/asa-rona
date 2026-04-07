<template>
  <div class="overflow-hidden w-full relative py-16 md:py-32 border-y border-border bg-background flex">
    <div class="flex w-max animate-loop-scroll group cursor-default">
      <div class="flex items-center group-hover:[animation-play-state:paused]">
        <span class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight px-8 text-black uppercase leading-none antialiased whitespace-nowrap">
          We design spaces that bring 
          <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2">comfort</span>,
          <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2">clarity</span>,
          and
          <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2">identity</span>,
          to your everyday living. —
        </span>
      </div>
      <div class="flex items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
        <span class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight px-8 text-black uppercase leading-none antialiased whitespace-nowrap">
           We design spaces that bring 
          <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2">comfort</span>,
          <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2">clarity</span>,
          and
          <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2">identity</span>,
          to your everyday living. —
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-loop-scroll {
  animation: loop-scroll 25s linear infinite;
}

@keyframes loop-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
