import { _ as __nuxt_component_0$1 } from "./nuxt-link-D_fahvTe.js";
import { ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { ArrowRightIcon, CoffeeIcon, BedIcon, SofaIcon, HammerIcon, QuoteIcon } from "lucide-vue-next";
import "D:/scraps/rona-asa/node_modules/ufo/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/defu/dist/defu.mjs";
import "D:/scraps/rona-asa/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/scraps/rona-asa/node_modules/hookable/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/unctx/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/h3/dist/index.mjs";
import "vue-router";
const _sfc_main$9 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const heroSection = ref(null);
    const isVisible = ref(false);
    const scrollProgress = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "heroSection",
        ref: heroSection,
        class: "relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0a0a0a]"
      }, _attrs))} data-v-7a711f9c><div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" data-v-7a711f9c><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;q=80&amp;w=2600" alt="Architectural Backdrop" class="w-full h-full object-cover origin-center transition-transform duration-[30s] ease-linear scale-animation" style="${ssrRenderStyle({ transform: `scale(${1.15 + scrollProgress.value * 0.1})` })}" data-v-7a711f9c><div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/40 z-10" data-v-7a711f9c></div><div class="absolute inset-0 bg-black/20 z-10" data-v-7a711f9c></div></div><div class="absolute inset-x-0 top-[15vh] bottom-[25vh] z-20 pointer-events-none flex flex-col justify-center" data-v-7a711f9c><div class="w-full px-8 md:px-[10%] overflow-hidden" data-v-7a711f9c><h1 class="${ssrRenderClass([isVisible.value ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0", "text-white text-[clamp(2.5rem,8vw,10rem)] font-bold tracking-tight leading-[0.9] uppercase transition-all duration-1000 ease-out"])}" data-v-7a711f9c> Designing <br class="md:hidden" data-v-7a711f9c> Spaces </h1></div><div class="w-full flex justify-end px-8 md:px-[15%] my-4 md:my-8" data-v-7a711f9c><h2 class="${ssrRenderClass([isVisible.value ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0", "text-white/90 text-[clamp(2.5rem,8vw,10rem)] font-bold tracking-tight leading-[0.9] uppercase transition-all duration-1000 delay-300 ease-out"])}" data-v-7a711f9c> With Purpose </h2></div><div class="w-full px-8 md:px-[12%]" data-v-7a711f9c><h3 class="${ssrRenderClass([isVisible.value ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0", "text-white text-[clamp(2.5rem,8vw,10rem)] font-bold tracking-tight leading-[0.9] uppercase transition-all duration-1000 delay-500 ease-out"])}" data-v-7a711f9c> And Emotion </h3></div></div><div class="${ssrRenderClass([{ "visible": isVisible.value }, "absolute top-[20%] right-[10%] md:right-[20%] z-30 w-[100px] md:w-[220px] aspect-[3/4] border border-white/20 p-1 bg-black/20 backdrop-blur-sm transition-all duration-1000 delay-700 pointer-events-none fade-in-up"])}" style="${ssrRenderStyle({ transform: `translateY(${scrollProgress.value * -60}px)` })}" data-v-7a711f9c><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;q=80&amp;w=800" class="w-full h-full object-cover grayscale brightness-90 contrast-125" alt="Detail Frame" data-v-7a711f9c></div><div class="${ssrRenderClass([isVisible.value ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8", "absolute bottom-12 md:bottom-20 right-8 md:right-20 z-40 flex flex-col items-end text-right max-w-[320px] transition-all duration-1000 delay-1000"])}" data-v-7a711f9c><p class="text-white/70 text-[10px] md:text-xs tracking-widest leading-relaxed uppercase mb-10" data-v-7a711f9c> Designing environments that balance tranquility, <br class="hidden md:block" data-v-7a711f9c> function, and architectural identity. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "group flex items-center text-white text-[10px] md:text-xs font-bold tracking-widest uppercase hover:text-white/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Projects <span class="ms-3 transition-transform duration-500 group-hover:translate-x-2" data-v-7a711f9c${_scopeId}>[ → ]</span>`);
          } else {
            return [
              createTextVNode(" Explore Projects "),
              createVNode("span", { class: "ms-3 transition-transform duration-500 group-hover:translate-x-2" }, "[ → ]")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="absolute top-[35%] left-[5%] z-50 text-white/30 hidden md:block animate-pulse-slow" data-v-7a711f9c><span class="text-2xl font-light" data-v-7a711f9c>✦</span></div><div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3" data-v-7a711f9c><span class="text-[9px] text-white/40 tracking-[0.3em] uppercase" data-v-7a711f9c>Scroll</span><div class="h-8 w-[1px] bg-white/10 relative overflow-hidden" data-v-7a711f9c><div class="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-scroll-line-fast" data-v-7a711f9c></div></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7a711f9c"]]);
const _sfc_main$8 = {
  __name: "StatementSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "w-full bg-background py-24 md:py-32 border-b border-border overflow-hidden"
      }, _attrs))} data-v-7b1c0a03><div class="max-w-[1440px] mx-auto px-6 md:px-8" data-v-7b1c0a03><div class="flex flex-col md:flex-row items-start gap-12 md:gap-24" data-v-7b1c0a03><div class="w-full md:w-1/3" data-v-7b1c0a03><span class="text-[10px] font-bold tracking-[0.3em] uppercase text-text-secondary block mb-4" data-v-7b1c0a03>Philosophy</span></div><div class="w-full md:w-2/3" data-v-7b1c0a03><h2 class="${ssrRenderClass([{ "visible": isVisible.value }, "text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-accent uppercase fade-in-up"])}" data-v-7b1c0a03> We believe in <br class="hidden md:block" data-v-7b1c0a03> designing spaces that balance function, <br class="hidden md:block" data-v-7b1c0a03> clarity, and identity. </h2><p class="${ssrRenderClass([{ "visible": isVisible.value }, "mt-12 text-sm md:text-base text-text-secondary max-w-xl leading-relaxed fade-in-up delay-200"])}" data-v-7b1c0a03> At ASA RONA, our approach is centered on an unwavering commitment to quality and the belief that the spaces we inhabit shape the way we experience daily life. </p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatementSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7b1c0a03"]]);
const _sfc_main$7 = {
  __name: "FeaturedSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "max-w-[1440px] mx-auto px-8 py-24 md:py-32 border-t border-border overflow-hidden"
      }, _attrs))} data-v-88c66ea1><div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center" data-v-88c66ea1><div class="${ssrRenderClass([{ "visible": isVisible.value }, "order-2 md:order-1 relative aspect-[4/5] bg-muted overflow-hidden fade-in-up"])}" data-v-88c66ea1><img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=1200" alt="Featured Interior" class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" data-v-88c66ea1><div class="absolute bottom-6 left-6 p-4 bg-white rounded-2xl shadow-sm" data-v-88c66ea1><span class="text-[10px] tracking-widest uppercase font-bold text-text-secondary block mb-1" data-v-88c66ea1>Project Focus</span><h4 class="text-sm font-bold uppercase" data-v-88c66ea1>The Aspen Residence</h4></div></div><div class="${ssrRenderClass([{ "visible": isVisible.value }, "order-1 md:order-2 md:pl-12 flex flex-col items-start justify-center fade-in-up delay-200"])}" data-v-88c66ea1><h2 class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] uppercase" data-v-88c66ea1>Elevating Comfort <br data-v-88c66ea1>With Every Curve</h2><p class="text-sm leading-relaxed text-text-secondary mb-12 max-w-lg" data-v-88c66ea1> Our philosophy centers on an unwavering commitment to quality and the belief that the spaces we inhabit shape the way we live. We use soft geometry, warm minimalism, and structural clarity. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "flex items-center px-8 py-4 rounded-full border border-black text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Experience `);
            _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Explore Experience "),
              createVNode(unref(ArrowRightIcon), { class: "w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturedSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-88c66ea1"]]);
const _sfc_main$6 = {
  __name: "ServicesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "w-full py-24 md:py-32 border-y border-border bg-background"
      }, _attrs))}><div class="${ssrRenderClass([isVisible.value ? "opacity-100" : "opacity-0 translate-y-10", "w-full grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-t border-b border-border transition-all duration-1000"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/kitchen",
        class: "group relative overflow-hidden h-[600px] flex flex-col justify-between p-10 bg-background cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 z-0 bg-white"${_scopeId}><img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000" alt="Kitchen" class="w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"${_scopeId}></div><div class="relative z-10 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CoffeeIcon), { class: "w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative z-10"${_scopeId}><h3 class="text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans"${_scopeId}>Kitchen<br${_scopeId}>Design</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 z-0 bg-white" }, [
                createVNode("img", {
                  src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000",
                  alt: "Kitchen",
                  class: "w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"
                })
              ]),
              createVNode("div", { class: "relative z-10 flex items-center justify-between" }, [
                createVNode(unref(CoffeeIcon), { class: "w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" })
              ]),
              createVNode("div", { class: "relative z-10" }, [
                createVNode("h3", { class: "text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans" }, [
                  createTextVNode("Kitchen"),
                  createVNode("br"),
                  createTextVNode("Design")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/bedroom",
        class: "group relative overflow-hidden h-[600px] flex flex-col justify-between p-10 bg-background cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 z-0 bg-white"${_scopeId}><img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&amp;fit=crop&amp;q=80&amp;w=1000" alt="Bedroom" class="w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"${_scopeId}></div><div class="relative z-10 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BedIcon), { class: "w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative z-10"${_scopeId}><h3 class="text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans"${_scopeId}>Bedroom<br${_scopeId}>Serenity</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 z-0 bg-white" }, [
                createVNode("img", {
                  src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000",
                  alt: "Bedroom",
                  class: "w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"
                })
              ]),
              createVNode("div", { class: "relative z-10 flex items-center justify-between" }, [
                createVNode(unref(BedIcon), { class: "w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" })
              ]),
              createVNode("div", { class: "relative z-10" }, [
                createVNode("h3", { class: "text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans" }, [
                  createTextVNode("Bedroom"),
                  createVNode("br"),
                  createTextVNode("Serenity")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/living-room",
        class: "group relative overflow-hidden h-[600px] flex flex-col justify-between p-10 bg-background cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 z-0 bg-white"${_scopeId}><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;q=80&amp;w=1000" alt="Living Room" class="w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"${_scopeId}></div><div class="relative z-10 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(SofaIcon), { class: "w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative z-10"${_scopeId}><h3 class="text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans"${_scopeId}>Living<br${_scopeId}>Spaces</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 z-0 bg-white" }, [
                createVNode("img", {
                  src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000",
                  alt: "Living Room",
                  class: "w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"
                })
              ]),
              createVNode("div", { class: "relative z-10 flex items-center justify-between" }, [
                createVNode(unref(SofaIcon), { class: "w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" })
              ]),
              createVNode("div", { class: "relative z-10" }, [
                createVNode("h3", { class: "text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans" }, [
                  createTextVNode("Living"),
                  createVNode("br"),
                  createTextVNode("Spaces")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/custom-furniture",
        class: "group relative overflow-hidden h-[600px] flex flex-col justify-between p-10 bg-background cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 z-0 bg-white"${_scopeId}><img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&amp;fit=crop&amp;q=80&amp;w=1000" alt="Custom Furniture" class="w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"${_scopeId}></div><div class="relative z-10 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(HammerIcon), { class: "w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative z-10"${_scopeId}><h3 class="text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans"${_scopeId}>Custom<br${_scopeId}>Furniture</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 z-0 bg-white" }, [
                createVNode("img", {
                  src: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000",
                  alt: "Custom Furniture",
                  class: "w-full h-full object-cover opacity-20 group-hover:opacity-100 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"
                })
              ]),
              createVNode("div", { class: "relative z-10 flex items-center justify-between" }, [
                createVNode(unref(HammerIcon), { class: "w-4 h-4 text-text-primary group-hover:text-white transition-colors duration-700" })
              ]),
              createVNode("div", { class: "relative z-10" }, [
                createVNode("h3", { class: "text-2xl uppercase tracking-tight font-medium text-text-primary group-hover:text-white transition-colors duration-700 font-sans" }, [
                  createTextVNode("Custom"),
                  createVNode("br"),
                  createTextVNode("Furniture")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServicesSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden w-full relative py-16 md:py-32 border-y border-border bg-background flex" }, _attrs))} data-v-e2b5970b><div class="flex w-max animate-loop-scroll group cursor-default" data-v-e2b5970b><div class="flex items-center group-hover:[animation-play-state:paused]" data-v-e2b5970b><span class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight px-8 text-black uppercase leading-none antialiased whitespace-nowrap" data-v-e2b5970b> We design spaces that bring <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2" data-v-e2b5970b>comfort</span>, <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2" data-v-e2b5970b>clarity</span>, and <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2" data-v-e2b5970b>identity</span>, to your everyday living. — </span></div><div class="flex items-center group-hover:[animation-play-state:paused]" aria-hidden="true" data-v-e2b5970b><span class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight px-8 text-black uppercase leading-none antialiased whitespace-nowrap" data-v-e2b5970b> We design spaces that bring <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2" data-v-e2b5970b>comfort</span>, <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2" data-v-e2b5970b>clarity</span>, and <span class="px-4 py-2 text-2xl md:text-4xl lg:text-6xl align-middle border border-black text-black rounded-full inline-block mx-2" data-v-e2b5970b>identity</span>, to your everyday living. — </span></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarqueeSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e2b5970b"]]);
const _sfc_main$4 = {
  __name: "AboutPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "w-full bg-surface py-24 md:py-32 border-b border-border overflow-hidden"
      }, _attrs))} data-v-a317b0ba><div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-16 lg:gap-24" data-v-a317b0ba><div class="${ssrRenderClass([{ "visible": isVisible.value }, "w-full md:w-1/2 fade-in-up"])}" data-v-a317b0ba><h2 class="text-[10px] font-bold tracking-[0.3em] uppercase text-text-secondary mb-10 block" data-v-a317b0ba>About Studio</h2><div class="text-[clamp(1.5rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-accent mb-10 uppercase" data-v-a317b0ba> ASA means hope. <br data-v-a317b0ba> RONA represents tone. </div><p class="text-xs md:text-sm tracking-wide text-text-secondary leading-relaxed max-w-md mb-12" data-v-a317b0ba> Together, ASA RONA is about creating spaces that carry intention, emotion, and identity. We craft environments that foster tranquility and inspire the people within them. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-[10px] font-bold tracking-widest uppercase border-b border-accent pb-2 hover:text-accent/60 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discovery more [ → ] `);
          } else {
            return [
              createTextVNode(" Discovery more [ → ] ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "visible": isVisible.value }, "w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-muted relative overflow-hidden fade-in-up delay-100"])}" data-v-a317b0ba><img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&amp;fit=crop&amp;q=80&amp;w=1400" alt="Atmospheric interior detail" class="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" data-v-a317b0ba></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutPreview.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a317b0ba"]]);
const _sfc_main$3 = {
  __name: "ProcessPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      { title: "Consultation", desc: "Understanding your lifestyle, vision, and the core intention of the project." },
      { title: "Concept Design", desc: "Crafting a mood and tone that reflects identity and aesthetic clarity." },
      { title: "Planning & Build", desc: "Detailed execution and refinement to ensure our vision is realized perfectly." }
    ];
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "w-full bg-background py-24 md:py-32 overflow-hidden"
      }, _attrs))} data-v-13bd6b25><div class="max-w-[1440px] mx-auto px-6 md:px-8" data-v-13bd6b25><div class="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8" data-v-13bd6b25><div class="${ssrRenderClass([{ "visible": isVisible.value }, "fade-in-up"])}" data-v-13bd6b25><h2 class="text-[10px] font-bold tracking-[0.3em] uppercase text-text-secondary mb-10 block" data-v-13bd6b25>Our Approach</h2><div class="text-[clamp(1.5rem,3.5vw,3rem)] font-bold tracking-tight leading-[1.1] text-accent uppercase max-w-xl" data-v-13bd6b25> A quiet approach to <br class="hidden lg:block" data-v-13bd6b25> architectural soul. </div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-16 mt-16 border-t border-border pt-16" data-v-13bd6b25><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="${ssrRenderClass([{ "visible": isVisible.value }, "fade-in-up group transition-all duration-700"])}" style="${ssrRenderStyle({ transitionDelay: `${i * 150}ms` })}" data-v-13bd6b25><div class="text-[10px] font-bold tracking-widest text-text-secondary w-16 mb-6 opacity-30 group-hover:opacity-100 transition-opacity uppercase" data-v-13bd6b25>Step 0${ssrInterpolate(i + 1)}</div><h3 class="text-sm font-bold uppercase tracking-widest text-text-primary mb-4 group-hover:text-accent transition-colors" data-v-13bd6b25>${ssrInterpolate(step.title)}</h3><p class="text-xs text-text-secondary leading-relaxed tracking-wide max-w-xs" data-v-13bd6b25>${ssrInterpolate(step.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProcessPreview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-13bd6b25"]]);
const _sfc_main$2 = {
  __name: "TestimonialSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const isVisible = ref(false);
    const testimonials = [
      {
        quote: "ASA RONA transformed our downtown loft into a sanctuary. Their attention to lighting and material texture is unparalleled.",
        author: "Elena Rostov",
        role: "Private Client",
        company: "Arch Digest",
        avatar: "https://i.pravatar.cc/150?img=11"
      },
      {
        quote: "The meticulous balance of white space and warm elements they introduced completely redefined our daily living experience.",
        author: "James Sterling",
        role: "Private Client",
        company: "Sterling Co",
        avatar: "https://i.pravatar.cc/150?img=33"
      },
      {
        quote: "A studio that truly understands how the absence of clutter brings forth mental clarity. Every detail was intentional.",
        author: "Sarah Lin",
        role: "Private Client",
        company: "Lin Estate",
        avatar: "https://i.pravatar.cc/150?img=68"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "max-w-[1440px] mx-auto px-8 py-24 md:py-32 border-t border-border overflow-hidden"
      }, _attrs))} data-v-0055055e><div class="${ssrRenderClass([{ "visible": isVisible.value }, "mb-20 flex flex-col items-start fade-in-up"])}" data-v-0055055e><span class="text-[10px] uppercase font-bold tracking-[0.3em] text-text-secondary mb-10 block" data-v-0055055e>Client Perspectives</span><h2 class="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1]" data-v-0055055e>What our <br data-v-0055055e> clients say</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-0055055e><!--[-->`);
      ssrRenderList(testimonials, (t, i) => {
        _push(`<div class="${ssrRenderClass([{ "visible": isVisible.value }, "fade-in-up group bg-[#F9F9F9] p-10 rounded-2xl flex flex-col h-[420px] transition-all duration-700 ease-out hover:bg-white border border-transparent hover:border-border/50 cursor-pointer"])}" style="${ssrRenderStyle({ transitionDelay: `${i * 150}ms` })}" data-v-0055055e><div class="flex justify-between items-start mb-10" data-v-0055055e><img${ssrRenderAttr("src", t.avatar)} alt="Avatar" class="w-12 h-12 rounded-full object-cover grayscale" data-v-0055055e><div class="flex items-center px-4 py-2 bg-white rounded-full border border-border shadow-sm text-[9px] font-bold uppercase tracking-widest text-text-secondary" data-v-0055055e>${ssrInterpolate(t.company)}</div></div>`);
        _push(ssrRenderComponent(unref(QuoteIcon), { class: "w-6 h-6 text-border mb-8" }, null, _parent));
        _push(`<p class="text-sm md:text-base font-medium leading-relaxed mb-auto italic text-text-primary" data-v-0055055e> &quot;${ssrInterpolate(t.quote)}&quot; </p><div class="mt-10 pt-8 border-t border-border/40" data-v-0055055e><h4 class="text-[10px] font-bold uppercase tracking-[0.2em]" data-v-0055055e>${ssrInterpolate(t.author)}</h4><span class="text-[9px] uppercase text-text-secondary block mt-1 tracking-widest" data-v-0055055e>${ssrInterpolate(t.role)}</span></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0055055e"]]);
const _sfc_main$1 = {
  __name: "HomeCTA",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "w-full py-32 md:py-48 bg-black text-white relative overflow-hidden"
      }, _attrs))} data-v-d7c36dae><div class="${ssrRenderClass([{ "visible": isVisible.value }, "max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-center text-center relative z-10 fade-in-up"])}" data-v-d7c36dae><h2 class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-12 uppercase leading-[0.9]" data-v-d7c36dae> Ready to create <br data-v-d7c36dae> something timeless? </h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "group flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start a Conversation `);
            _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "w-4 h-4 ms-3 transition-transform duration-500 group-hover:translate-x-1" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Start a Conversation "),
              createVNode(unref(ArrowRightIcon), { class: "w-4 h-4 ms-3 transition-transform duration-500 group-hover:translate-x-1" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="absolute top-[20%] left-[10%] text-white/5 pointer-events-none text-9xl font-bold uppercase select-none" data-v-d7c36dae>ASA</div><div class="absolute bottom-[20%] right-[10%] text-white/5 pointer-events-none text-9xl font-bold uppercase select-none" data-v-d7c36dae>RONA</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeCTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d7c36dae"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_StatementSection = __nuxt_component_1;
      const _component_FeaturedSection = __nuxt_component_2;
      const _component_ServicesSection = _sfc_main$6;
      const _component_MarqueeSection = __nuxt_component_4;
      const _component_AboutPreview = __nuxt_component_5;
      const _component_ProcessPreview = __nuxt_component_6;
      const _component_TestimonialSection = __nuxt_component_7;
      const _component_HomeCTA = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_StatementSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FeaturedSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_MarqueeSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutPreview, null, null, _parent));
      _push(ssrRenderComponent(_component_ProcessPreview, null, null, _parent));
      _push(ssrRenderComponent(_component_TestimonialSection, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeCTA, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BkYQrfLi.js.map
