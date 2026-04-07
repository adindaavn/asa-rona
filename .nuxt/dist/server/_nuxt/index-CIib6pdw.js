import { _ as __nuxt_component_0 } from "./nuxt-link-D_fahvTe.js";
import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { ArrowRightIcon } from "lucide-vue-next";
import { u as useProjects } from "./useProjects-CkvNr8XX.js";
import { _ as _export_sfc } from "../server.mjs";
import "D:/scraps/rona-asa/node_modules/ufo/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/defu/dist/defu.mjs";
import "D:/scraps/rona-asa/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/scraps/rona-asa/node_modules/hookable/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/unctx/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/h3/dist/index.mjs";
import "vue-router";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { getCategories } = useProjects();
    const categories = getCategories();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white pb-0" }, _attrs))} data-v-ddbeaf3a><section class="w-full bg-background pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden" data-v-ddbeaf3a><div class="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col items-start gap-8 fade-in-up" data-v-ddbeaf3a><h1 class="text-[clamp(3.5rem,8.5vw,6rem)] font-bold tracking-tighter leading-[0.85] text-accent uppercase" data-v-ddbeaf3a> PROJECTS </h1><p class="text-xs md:text-sm tracking-widest text-text-secondary max-w-lg leading-relaxed uppercase" data-v-ddbeaf3a> A selection of spaces designed with intention and clarity. </p></div></section><div class="w-full bg-black" data-v-ddbeaf3a><!--[-->`);
      ssrRenderList(unref(categories), (category, index2) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: category.id,
          to: `/projects/${category.id}`,
          class: "group relative block w-full h-[60vh] md:h-[75vh] overflow-hidden bg-black text-white cursor-pointer fade-in-up border-b border-white/10 last:border-0",
          style: { transitionDelay: `${index2 % 3 * 100}ms` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105" style="${ssrRenderStyle({ backgroundImage: `url(${category.image})` })}" data-v-ddbeaf3a${_scopeId}></div><div class="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" data-v-ddbeaf3a${_scopeId}></div><div class="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-700 group-hover:scale-110" data-v-ddbeaf3a${_scopeId}><h2 class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase" data-v-ddbeaf3a${_scopeId}>${ssrInterpolate(category.name)}</h2><div class="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-out flex items-center gap-2" data-v-ddbeaf3a${_scopeId}><span class="text-xs tracking-widest uppercase font-bold" data-v-ddbeaf3a${_scopeId}>Explore</span>`);
              _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "w-4 h-4 ml-2" }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105",
                  style: { backgroundImage: `url(${category.image})` }
                }, null, 4),
                createVNode("div", { class: "absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" }),
                createVNode("div", { class: "absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-700 group-hover:scale-110" }, [
                  createVNode("h2", { class: "text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase" }, toDisplayString(category.name), 1),
                  createVNode("div", { class: "h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-out flex items-center gap-2" }, [
                    createVNode("span", { class: "text-xs tracking-widest uppercase font-bold" }, "Explore"),
                    createVNode(unref(ArrowRightIcon), { class: "w-4 h-4 ml-2" })
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ddbeaf3a"]]);
export {
  index as default
};
//# sourceMappingURL=index-CIib6pdw.js.map
