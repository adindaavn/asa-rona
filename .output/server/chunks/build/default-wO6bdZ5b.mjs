import { _ as __nuxt_component_0 } from './nuxt-link-D_fahvTe.mjs';
import { mergeProps, ref, computed, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { XIcon, MenuIcon, InstagramIcon, LinkedinIcon } from 'lucide-vue-next';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$2 = {
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const isScrolled = ref(false);
    const route = useRoute();
    const isHome = computed(() => route.path === "/");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["w-full z-[100] transition-all duration-300 ease-in-out border-b", [
          isHome.value ? "fixed top-0" : "relative",
          isScrolled.value || !isHome.value ? "bg-white/80 backdrop-blur-md border-border py-4 shadow-sm" : "bg-transparent border-transparent py-6 shadow-none"
        ]]
      }, _attrs))}><div class="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-8 h-10"><div class="flex flex-1 justify-start items-center"><div class="${ssrRenderClass([isScrolled.value || !isHome.value ? "text-black" : "text-white", "hidden md:flex space-x-12 transition-colors duration-300"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        "exact-active-class": "font-bold opacity-100",
        class: "text-xs font-medium tracking-widest uppercase flex items-center opacity-70 hover:opacity-100 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HOME`);
          } else {
            return [
              createTextVNode("HOME")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        "active-class": "font-bold opacity-100",
        class: "text-xs font-medium tracking-widest uppercase flex items-center opacity-70 hover:opacity-100 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ABOUT`);
          } else {
            return [
              createTextVNode("ABOUT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        "active-class": "font-bold opacity-100",
        class: "text-xs font-medium tracking-widest uppercase flex items-center opacity-70 hover:opacity-100 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`PROJECT`);
          } else {
            return [
              createTextVNode("PROJECT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="${ssrRenderClass([isScrolled.value || !isHome.value ? "text-black" : "text-white", "md:hidden transition-colors duration-300 p-2"])}" aria-label="Menu">`);
      if (isOpen.value) {
        _push(ssrRenderComponent(unref(XIcon), { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(MenuIcon), { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button></div><div class="flex justify-end items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([isScrolled.value || !isHome.value ? "text-accent" : "text-white", "text-lg font-bold tracking-[0.2em] uppercase transition-colors duration-300"])}"${_scopeId}>ASA RONA</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["text-lg font-bold tracking-[0.2em] uppercase transition-colors duration-300", isScrolled.value || !isHome.value ? "text-accent" : "text-white"]
              }, "ASA RONA", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-2xl flex flex-col items-center py-12 space-y-10 z-40 transition-all duration-300 text-black" style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        onClick: ($event) => isOpen.value = false,
        "exact-active-class": "!font-bold",
        class: "text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HOME`);
          } else {
            return [
              createTextVNode("HOME")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        onClick: ($event) => isOpen.value = false,
        "active-class": "!font-bold",
        class: "text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ABOUT`);
          } else {
            return [
              createTextVNode("ABOUT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        onClick: ($event) => isOpen.value = false,
        "active-class": "!font-bold",
        class: "text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`PROJECT`);
          } else {
            return [
              createTextVNode("PROJECT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        onClick: ($event) => isOpen.value = false,
        class: "text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CONTACT`);
          } else {
            return [
              createTextVNode("CONTACT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "w-full bg-background pt-24 pb-8 overflow-hidden font-sans border-t border-border" }, _attrs))}><div class="max-w-[1440px] mx-auto px-8"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 pb-12"><div class="md:col-span-2"><h3 class="text-2xl font-bold tracking-[0.2em] mb-8 max-w-[250px] uppercase"> ASA RONA </h3><p class="text-xs text-text-secondary max-w-[250px] leading-relaxed uppercase tracking-widest">Elevating interior spaces with minimalist design and purposeful aesthetic.</p></div><div class="md:col-span-1"><h4 class="text-[10px] font-bold uppercase tracking-widest mb-6 border-b border-border pb-2 w-fit">Menu</h4><ul class="text-[10px] space-y-4 text-text-primary uppercase tracking-widest"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-text-secondary transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "hover:text-text-secondary transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "hover:text-text-secondary transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:text-text-secondary transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="md:col-span-1"><h4 class="text-[10px] font-bold uppercase tracking-widest mb-6 border-b border-border pb-2 w-fit">Socials</h4><div class="flex space-x-4 text-text-primary"><a href="#" class="hover:text-text-secondary transition-colors" aria-label="Instagram">`);
      _push(ssrRenderComponent(unref(InstagramIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`</a><a href="#" class="hover:text-text-secondary transition-colors" aria-label="Pinterest"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3Z"></path><path d="m11 10-2.5 6"></path><path d="m16 10-2.5 6"></path><circle cx="12" cy="10" r="1"></circle></svg></a><a href="#" class="hover:text-text-secondary transition-colors" aria-label="LinkedIn">`);
      _push(ssrRenderComponent(unref(LinkedinIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`</a></div></div></div><div class="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-secondary border-t border-border pt-8"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ASA RONA Studio</p><div class="flex flex-wrap gap-4 mt-4 md:mt-0"><a href="#" class="hover:text-text-primary transition-colors">Privacy Policy</a><a href="#" class="hover:text-text-primary transition-colors">Terms of Service</a></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = _sfc_main$2;
      const _component_AppFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavbar, null, null, _parent));
      _push(`<main class="min-h-screen overflow-hidden">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-wO6bdZ5b.mjs.map
