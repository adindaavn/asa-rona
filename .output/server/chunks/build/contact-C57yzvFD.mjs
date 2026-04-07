import { _ as __nuxt_component_0 } from './nuxt-link-D_fahvTe.mjs';
import { ref, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderVNode, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { ChefHatIcon, BedIcon, SofaIcon, BoxIcon, ArrowLeftIcon, ArrowRightIcon, Loader2Icon, CheckIcon } from 'lucide-vue-next';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const currentStep = ref(1);
    const isSubmitting = ref(false);
    const isSubmitted = ref(false);
    const formData = ref({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      description: "",
      roomSize: "",
      budget: "",
      location: "",
      timeline: ""
    });
    const projectTypes = [
      { id: "kitchen", name: "Kitchen", icon: ChefHatIcon },
      { id: "bedroom", name: "Bedroom", icon: BedIcon },
      { id: "living", name: "Living Room", icon: SofaIcon },
      { id: "furniture", name: "Furniture", icon: BoxIcon }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white min-h-screen" }, _attrs))} data-v-33e24c08><section class="max-w-[1440px] mx-auto px-6 md:px-8 pt-32 pb-16 md:pb-24 fade-in-up" data-v-33e24c08><div class="flex flex-col lg:flex-row gap-16 lg:gap-32" data-v-33e24c08><div class="lg:w-1/3 flex flex-col justify-start" data-v-33e24c08><h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.85] text-accent mb-8" data-v-33e24c08> Let\u2019s Design Your Space </h1><p class="text-xs md:text-sm tracking-widest text-text-secondary uppercase leading-relaxed max-w-sm mb-12" data-v-33e24c08> Tell us about your vision \u2014 we\u2019ll help bring it to life with clarity and intention. </p><div class="mt-auto space-y-8 pt-12 border-t border-border" data-v-33e24c08><div data-v-33e24c08><p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1" data-v-33e24c08>Inquiry Response</p><p class="text-xs font-medium tracking-wide" data-v-33e24c08>We typically respond within 24 hours.</p></div><div data-v-33e24c08><p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1" data-v-33e24c08>Contact Details</p><a href="mailto:hello@asarona.com" class="block text-xs font-medium tracking-wide hover:underline" data-v-33e24c08>hello@asarona.com</a><a href="tel:+1234567890" class="block text-xs font-medium tracking-wide mt-1" data-v-33e24c08>+1 (234) 567 890</a></div></div></div><div class="lg:w-2/3 min-h-[500px] flex flex-col relative bg-surface p-8 md:p-12 border border-border shadow-sm overflow-hidden" data-v-33e24c08>`);
      if (!isSubmitted.value) {
        _push(`<div class="w-full h-full flex flex-col" data-v-33e24c08><div class="flex items-center justify-between mb-12" data-v-33e24c08><span class="text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase" data-v-33e24c08>Step ${ssrInterpolate(currentStep.value)} of 4</span><div class="flex gap-1" data-v-33e24c08><!--[-->`);
        ssrRenderList(4, (s) => {
          _push(`<div class="${ssrRenderClass([s <= currentStep.value ? "bg-black" : "bg-border", "h-1 w-8 transition-colors duration-500"])}" data-v-33e24c08></div>`);
        });
        _push(`<!--]--></div></div><div class="flex-1 overflow-hidden relative" data-v-33e24c08>`);
        if (currentStep.value === 1) {
          _push(`<div class="space-y-12" data-v-33e24c08><h2 class="text-2xl md:text-3xl font-bold tracking-tight uppercase" data-v-33e24c08>Who are we designing for?</h2><div class="space-y-12 max-w-md" data-v-33e24c08><div class="group relative" data-v-33e24c08><input type="text"${ssrRenderAttr("value", formData.value.name)} placeholder="Name" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors" data-v-33e24c08></div><div class="group relative" data-v-33e24c08><input type="email"${ssrRenderAttr("value", formData.value.email)} placeholder="Email Address" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors" data-v-33e24c08></div><div class="group relative" data-v-33e24c08><input type="tel"${ssrRenderAttr("value", formData.value.phone)} placeholder="Phone / WhatsApp" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors" data-v-33e24c08></div></div></div>`);
        } else if (currentStep.value === 2) {
          _push(`<div class="space-y-12" data-v-33e24c08><h2 class="text-2xl md:text-3xl font-bold tracking-tight uppercase" data-v-33e24c08>What kind of space?</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-33e24c08><!--[-->`);
          ssrRenderList(projectTypes, (type) => {
            _push(`<button class="${ssrRenderClass([formData.value.projectType === type.id ? "bg-black text-white border-black shadow-lg scale-[1.02]" : "bg-background hover:bg-surface border-border hover:border-black", "flex flex-col items-center justify-center p-8 border transition-all duration-300 gap-4 group"])}" data-v-33e24c08>`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(type.icon), { class: "w-8 h-8 transition-transform group-hover:scale-110" }, null), _parent);
            _push(`<span class="text-[10px] font-bold tracking-[0.2em] uppercase" data-v-33e24c08>${ssrInterpolate(type.name)}</span></button>`);
          });
          _push(`<!--]--></div></div>`);
        } else if (currentStep.value === 3) {
          _push(`<div class="space-y-12" data-v-33e24c08><h2 class="text-2xl md:text-3xl font-bold tracking-tight uppercase" data-v-33e24c08>Tell us about your vision.</h2><div class="space-y-10" data-v-33e24c08><textarea placeholder="Short description of your project..." rows="3" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors resize-none" data-v-33e24c08>${ssrInterpolate(formData.value.description)}</textarea><div class="grid grid-cols-1 md:grid-cols-2 gap-10" data-v-33e24c08><div data-v-33e24c08><p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-4" data-v-33e24c08>Approximate Room Size (Optional)</p><input type="text"${ssrRenderAttr("value", formData.value.roomSize)} placeholder="e.g. 50 sq m" class="w-full bg-transparent border-b border-border py-2 outline-none tracking-wide focus:border-black transition-colors" data-v-33e24c08></div><div data-v-33e24c08><p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-4" data-v-33e24c08>Budget Range (Optional)</p><select class="w-full bg-transparent border-b border-border py-2 outline-none tracking-wide focus:border-black transition-colors appearance-none cursor-pointer" data-v-33e24c08><option value="" disabled data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.budget) ? ssrLooseContain(formData.value.budget, "") : ssrLooseEqual(formData.value.budget, "")) ? " selected" : ""}>Select range</option><option value="compact" data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.budget) ? ssrLooseContain(formData.value.budget, "compact") : ssrLooseEqual(formData.value.budget, "compact")) ? " selected" : ""}>Up to $10,000</option><option value="standard" data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.budget) ? ssrLooseContain(formData.value.budget, "standard") : ssrLooseEqual(formData.value.budget, "standard")) ? " selected" : ""}>$10,000 - $30,000</option><option value="premium" data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.budget) ? ssrLooseContain(formData.value.budget, "premium") : ssrLooseEqual(formData.value.budget, "premium")) ? " selected" : ""}>$30,000 - $100,000</option><option value="luxury" data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.budget) ? ssrLooseContain(formData.value.budget, "luxury") : ssrLooseEqual(formData.value.budget, "luxury")) ? " selected" : ""}>$100,000+</option></select></div></div></div></div>`);
        } else if (currentStep.value === 4) {
          _push(`<div class="space-y-12" data-v-33e24c08><h2 class="text-2xl md:text-3xl font-bold tracking-tight uppercase" data-v-33e24c08>Location &amp; Timeline</h2><div class="space-y-12 max-w-md" data-v-33e24c08><div class="group relative" data-v-33e24c08><input type="text"${ssrRenderAttr("value", formData.value.location)} placeholder="City / Address" class="w-full bg-transparent border-b border-border py-4 outline-none text-lg tracking-wide placeholder:text-text-secondary/50 focus:border-black transition-colors" data-v-33e24c08></div><div data-v-33e24c08><p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-4" data-v-33e24c08>Desired Timeline</p><select class="w-full bg-transparent border-b border-border py-2 outline-none tracking-wide focus:border-black transition-colors appearance-none cursor-pointer" data-v-33e24c08><option value="" disabled data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.timeline) ? ssrLooseContain(formData.value.timeline, "") : ssrLooseEqual(formData.value.timeline, "")) ? " selected" : ""}>Select timeline</option><option value="urgent" data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.timeline) ? ssrLooseContain(formData.value.timeline, "urgent") : ssrLooseEqual(formData.value.timeline, "urgent")) ? " selected" : ""}>As soon as possible</option><option value="standard" data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.timeline) ? ssrLooseContain(formData.value.timeline, "standard") : ssrLooseEqual(formData.value.timeline, "standard")) ? " selected" : ""}>Next 3-6 months</option><option value="planning" data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.timeline) ? ssrLooseContain(formData.value.timeline, "planning") : ssrLooseEqual(formData.value.timeline, "planning")) ? " selected" : ""}>Just browsing / next year</option><option value="flexible" data-v-33e24c08${ssrIncludeBooleanAttr(Array.isArray(formData.value.timeline) ? ssrLooseContain(formData.value.timeline, "flexible") : ssrLooseEqual(formData.value.timeline, "flexible")) ? " selected" : ""}>Flexible</option></select></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-12 flex items-center justify-between border-t border-border pt-8" data-v-33e24c08><button class="text-[10px] font-bold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors flex items-center" style="${ssrRenderStyle(currentStep.value > 1 ? null : { display: "none" })}" data-v-33e24c08>`);
        _push(ssrRenderComponent(unref(ArrowLeftIcon), { class: "w-3 h-3 mr-2" }, null, _parent));
        _push(` Back </button><div style="${ssrRenderStyle(currentStep.value === 1 ? null : { display: "none" })}" data-v-33e24c08></div>`);
        if (currentStep.value < 4) {
          _push(`<button class="group flex items-center justify-center px-10 py-4 rounded-full border border-black bg-white text-black text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300" data-v-33e24c08> Continue `);
          _push(ssrRenderComponent(unref(ArrowRightIcon), { class: "w-4 h-4 ms-2 transition-transform group-hover:translate-x-1" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<button${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="group flex items-center justify-center px-10 py-4 rounded-full bg-black text-white text-[10px] font-bold tracking-widest uppercase hover:bg-transparent hover:text-black border border-black transition-all duration-300 disabled:opacity-50" data-v-33e24c08>`);
          if (!isSubmitting.value) {
            _push(`<span data-v-33e24c08>Start Your Project</span>`);
          } else {
            _push(`<span class="flex items-center" data-v-33e24c08>`);
            _push(ssrRenderComponent(unref(Loader2Icon), { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent));
            _push(` Submitting</span>`);
          }
          _push(`</button>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="w-full h-full flex flex-col items-center justify-center text-center py-20 fade-in-up" data-v-33e24c08><div class="w-20 h-20 rounded-full border border-black flex items-center justify-center mb-8" data-v-33e24c08>`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "w-10 h-10 text-black animate-scale-up" }, null, _parent));
        _push(`</div><h2 class="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6" data-v-33e24c08>Thank You.</h2><p class="text-xs md:text-sm tracking-widest text-text-secondary uppercase mb-12 max-w-sm" data-v-33e24c08>We\u2019ve received your inquiry. Our team will get back to you shortly to discuss your vision.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "group flex items-center justify-center px-10 py-4 rounded-full border border-border text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Return Home `);
            } else {
              return [
                createTextVNode(" Return Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33e24c08"]]);

export { contact as default };
//# sourceMappingURL=contact-C57yzvFD.mjs.map
