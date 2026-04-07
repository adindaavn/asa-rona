import { mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-D_fahvTe.mjs';
import { ArrowRightIcon } from 'lucide-vue-next';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$1 = {
  __name: "ShowroomSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-24 md:py-32 bg-background border-t border-border overflow-hidden" }, _attrs))} data-v-f3cb34d0><div class="max-w-[1440px] mx-auto px-6 md:px-8" data-v-f3cb34d0><div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24" data-v-f3cb34d0><div class="w-full lg:w-1/2 fade-in-up" data-v-f3cb34d0><h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-8 md:mb-12" data-v-f3cb34d0>Visit Our Showroom</h2><div class="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight leading-[1.1] text-accent mb-10 uppercase" data-v-f3cb34d0> Experience our designs <br data-v-f3cb34d0>in person. We\u2019d love <br data-v-f3cb34d0>to welcome you. </div><div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12" data-v-f3cb34d0><div data-v-f3cb34d0><h4 class="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4 border-b border-border pb-2 w-fit" data-v-f3cb34d0>Location</h4><p class="text-xs md:text-sm tracking-wide text-text-primary leading-relaxed" data-v-f3cb34d0> Jl. Senopati No. 8B,<br data-v-f3cb34d0> Kebayoran Baru, Jakarta Selatan<br data-v-f3cb34d0> 12190, Indonesia </p></div><div data-v-f3cb34d0><h4 class="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4 border-b border-border pb-2 w-fit" data-v-f3cb34d0>Hours &amp; Contact</h4><p class="text-xs md:text-sm tracking-wide text-text-primary leading-relaxed mb-1" data-v-f3cb34d0> Mon \u2013 Sat: 10:00 \u2013 18:00 </p><p class="text-xs md:text-sm tracking-wide text-text-primary leading-relaxed" data-v-f3cb34d0> +62 21 555 0123 </p></div></div></div><div class="w-full lg:w-1/2 fade-in-up delay-100" data-v-f3cb34d0><div class="relative w-full aspect-square md:aspect-video lg:aspect-square bg-muted rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-500" data-v-f3cb34d0><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273678077421!2d106.8048227750377!3d-6.227602093760467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14f63c87fdf%3A0x600f1352e8964896!2sJl.%20Senopati%2C%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1712156800000!5m2!1sen!2sid" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="ASA RONA Showroom Location" class="grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700 ease-in-out" data-v-f3cb34d0></iframe></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShowroomSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f3cb34d0"]]);
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const reasons = [
      { title: "Thoughtful Design", desc: "Every detail has purpose. We design with intent, ensuring spaces are as functional as they are beautiful." },
      { title: "Client-Centered", desc: "Designed around your lifestyle. We listen closely to translate your personal story into physical form." },
      { title: "Timeless Aesthetic", desc: "Not trend-driven. We create enduring environments that feel fresh and relevant for years to come." },
      { title: "End-to-End Service", desc: "From initial concept to final execution and styling, we seamlessly manage every phase of the project." }
    ];
    const steps = [
      { title: "Consultation", desc: "We begin by understanding your needs, lifestyle, and vision to establish a clear direction for the project." },
      { title: "Concept Development", desc: "Crafting moodboards, layout ideas, and finding the perfect balance of materials to define the aesthetic." },
      { title: "Design Planning", desc: "Selecting materials, refining details, and creating comprehensive technical drawings for execution." },
      { title: "Execution", desc: "Managing the build and installation process with trusted craftsmen to ensure our vision is realized perfectly." },
      { title: "Final Styling", desc: "Adding the finishing touches\u2014art, objects, and textiles\u2014to bring soul and character to your new space." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShowroomSection = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white pb-0" }, _attrs))} data-v-c4870676><section class="w-full bg-background pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden" data-v-c4870676><div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-center text-center fade-in-up" data-v-c4870676><h1 class="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tighter leading-[0.85] text-accent uppercase max-w-5xl" data-v-c4870676> Designing Spaces With Purpose and Emotion </h1><p class="mt-8 text-xs md:text-sm tracking-wide text-text-secondary max-w-xl leading-relaxed uppercase" data-v-c4870676> We believe that interior design is more than arranging furniture. It&#39;s about shaping the way you experience your daily life. </p></div><div class="w-full px-4 md:px-8 mt-16 md:mt-24 fade-in-up delay-200 h-[50vh] md:h-[65vh]" data-v-c4870676><img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=2600" alt="Minimalist interior" class="w-full h-full object-cover object-center" data-v-c4870676></div></section><section class="w-full py-24 md:py-32 bg-surface" data-v-c4870676><div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24" data-v-c4870676><div class="w-full lg:w-1/2 fade-in-up" data-v-c4870676><h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-8 md:mb-12" data-v-c4870676>The Meaning</h2><div class="text-[clamp(1.5rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-accent mb-10" data-v-c4870676><span class="block mb-2 md:mb-4" data-v-c4870676>ASA means hope.</span><span class="block text-text-secondary mb-2 md:mb-4" data-v-c4870676>RONA represents tone,</span><span class="block text-text-secondary" data-v-c4870676>atmosphere, and feeling.</span></div><p class="text-xs md:text-sm tracking-wide text-text-secondary leading-relaxed max-w-md" data-v-c4870676> Together, ASA RONA is about creating spaces that carry intention, emotion, and identity. We craft environments that foster tranquility and inspire the people within them. </p></div><div class="w-full lg:w-1/2 aspect-square md:aspect-[4/5] bg-muted relative overflow-hidden fade-in-up delay-100" data-v-c4870676><img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&amp;fit=crop&amp;q=80&amp;w=1400" alt="Atmospheric interior detail" class="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105" data-v-c4870676></div></div></section><section class="w-full py-24 md:py-40 bg-background border-t border-border" data-v-c4870676><div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-center text-center fade-in-up" data-v-c4870676><h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-12 md:mb-16" data-v-c4870676>Our Philosophy</h2><p class="text-xl md:text-3xl lg:text-5xl font-medium tracking-tight leading-snug lg:leading-[1.15] text-accent max-w-5xl" data-v-c4870676> We seek the perfect balance between function and emotion. Our approach relies on simplicity and intentional design, ensuring every space provides comfort, clarity, and a strong sense of identity. </p></div></section><section class="w-full py-24 md:py-32 bg-surface" data-v-c4870676><div class="max-w-[1440px] mx-auto px-6 md:px-8" data-v-c4870676><div class="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 fade-in-up" data-v-c4870676><h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase" data-v-c4870676>Why Choose Us</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16" data-v-c4870676><!--[-->`);
      ssrRenderList(reasons, (reason, i) => {
        _push(`<div class="group cursor-default fade-in-up" style="${ssrRenderStyle({ transitionDelay: `${i * 100}ms` })}" data-v-c4870676><div class="h-[1px] w-full bg-border mb-8 group-hover:bg-accent transition-colors duration-500" data-v-c4870676></div><h3 class="text-sm md:text-base font-bold text-accent mb-4 tracking-wider uppercase" data-v-c4870676>${ssrInterpolate(reason.title)}</h3><p class="text-xs text-text-secondary leading-relaxed tracking-wide" data-v-c4870676>${ssrInterpolate(reason.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="w-full py-24 md:py-32 bg-background border-t border-border" data-v-c4870676><div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24" data-v-c4870676><div class="lg:w-1/3 fade-in-up" data-v-c4870676><h2 class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase mb-8 lg:sticky lg:top-32" data-v-c4870676>Our Process</h2></div><div class="lg:w-2/3 flex flex-col" data-v-c4870676><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="flex flex-col md:flex-row py-12 md:py-16 border-t border-border group last:border-b fade-in-up" style="${ssrRenderStyle({ transitionDelay: `${i % 3 * 100}ms` })}" data-v-c4870676><div class="text-[10px] font-bold text-text-secondary w-16 mb-4 md:mb-0 pt-1 tracking-widest" data-v-c4870676>0${ssrInterpolate(i + 1)}</div><div class="flex-1 transition-transform duration-500 md:group-hover:translate-x-4" data-v-c4870676><h3 class="text-lg md:text-xl font-bold text-accent mb-4 tracking-tight uppercase group-hover:text-text-secondary transition-colors" data-v-c4870676>${ssrInterpolate(step.title)}</h3><p class="text-xs md:text-sm text-text-secondary leading-relaxed tracking-wide max-w-lg" data-v-c4870676>${ssrInterpolate(step.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_ShowroomSection, null, null, _parent));
      _push(`<section class="w-full py-32 md:py-48 bg-black text-white relative overflow-hidden" data-v-c4870676><div class="absolute inset-0 opacity-10 pointer-events-none" data-v-c4870676></div><div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-center text-center relative z-10 fade-in-up" data-v-c4870676><h2 class="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 uppercase leading-[0.9]" data-v-c4870676>Let&#39;s create a space<br data-v-c4870676>that reflects you.</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "group flex items-center justify-center px-10 py-4 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
            _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "w-4 h-4 ms-3 transition-transform duration-500 group-hover:translate-x-1" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Contact Us "),
              createVNode(unref(ArrowRightIcon), { class: "w-4 h-4 ms-3 transition-transform duration-500 group-hover:translate-x-1" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4870676"]]);

export { about as default };
//# sourceMappingURL=about-B3BFVvut.mjs.map
