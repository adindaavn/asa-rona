import { _ as __nuxt_component_0 } from "./nuxt-link-D_fahvTe.js";
import { mergeProps, useSSRContext, watch, unref, computed, ref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderTeleport, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { XIcon, ArrowLeftIcon } from "lucide-vue-next";
import { u as useProjects } from "./useProjects-CkvNr8XX.js";
import { _ as _export_sfc } from "../server.mjs";
import "D:/scraps/rona-asa/node_modules/ufo/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/defu/dist/defu.mjs";
import "D:/scraps/rona-asa/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/scraps/rona-asa/node_modules/hookable/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/unctx/dist/index.mjs";
import "D:/scraps/rona-asa/node_modules/h3/dist/index.mjs";
const _sfc_main$2 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ["openModal"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group cursor-pointer overflow-hidden break-inside-avoid mb-6 rounded-sm w-full" }, _attrs))}><div class="w-full h-full relative overflow-hidden bg-muted"><img${ssrRenderAttr("src", __props.project.images[0])}${ssrRenderAttr("alt", __props.project.title)} class="w-full object-cover transition-all duration-[1s] ease-out group-hover:scale-105" loading="lazy"><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-6 md:p-8"><h3 class="text-white text-lg md:text-xl font-bold tracking-tight uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">${ssrInterpolate(__props.project.title)}</h3><p class="text-white/70 text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"> Click to View </p></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ProjectModal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    project: {
      type: Object,
      default: null
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    watch(() => props.isOpen, (val) => {
      if (val) {
        (void 0).body.style.overflow = "hidden";
      } else {
        (void 0).body.style.overflow = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.isOpen && __props.project) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto" data-v-b6c8c7f7><div class="absolute inset-0 bg-black/80 backdrop-blur-sm" data-v-b6c8c7f7></div><div class="relative w-[95vw] h-[95vh] md:w-[90vw] md:h-[90vh] bg-surface rounded-sm flex flex-col shadow-2xl overflow-hidden scale-100 modal-card border border-border" data-v-b6c8c7f7><button class="absolute top-6 right-6 z-10 w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 text-black shadow-sm group" data-v-b6c8c7f7>`);
          _push2(ssrRenderComponent(unref(XIcon), { class: "w-6 h-6 transition-transform duration-300 group-hover:rotate-90" }, null, _parent));
          _push2(`</button><div class="w-full h-1/2 md:h-2/3 bg-muted overflow-x-auto flex snap-x snap-mandatory hide-scrollbar" data-v-b6c8c7f7><!--[-->`);
          ssrRenderList(__props.project.images, (img, idx) => {
            _push2(`<div class="h-full min-w-full md:min-w-[80%] lg:min-w-[70%] snap-center flex-shrink-0 relative" data-v-b6c8c7f7><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", __props.project.title)} class="w-full h-full object-cover transition-all duration-1000" loading="lazy" data-v-b6c8c7f7></div>`);
          });
          _push2(`<!--]--></div><div class="w-full h-1/2 md:h-1/3 p-8 md:p-12 overflow-y-auto bg-background flex flex-col lg:flex-row justify-between gap-12" data-v-b6c8c7f7><div class="lg:w-2/3" data-v-b6c8c7f7><h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase text-accent mb-6" data-v-b6c8c7f7>${ssrInterpolate(__props.project.title)}</h2><p class="text-sm md:text-base text-text-secondary leading-relaxed tracking-wide max-w-2xl" data-v-b6c8c7f7>${ssrInterpolate(__props.project.description)}</p></div><div class="lg:w-1/3 flex flex-col gap-6 pt-2 lg:pt-0 lg:border-l border-border lg:pl-12" data-v-b6c8c7f7>`);
          if (__props.project.roomSize && __props.project.roomSize !== "N/A") {
            _push2(`<div data-v-b6c8c7f7><p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1" data-v-b6c8c7f7>Room Size</p><p class="text-sm font-medium tracking-wide text-accent" data-v-b6c8c7f7>${ssrInterpolate(__props.project.roomSize)}</p></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (__props.project.location) {
            _push2(`<div data-v-b6c8c7f7><p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1" data-v-b6c8c7f7>Location</p><p class="text-sm font-medium tracking-wide text-accent" data-v-b6c8c7f7>${ssrInterpolate(__props.project.location)}</p></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (__props.project.date) {
            _push2(`<div data-v-b6c8c7f7><p class="text-[10px] font-bold tracking-widest uppercase text-text-secondary mb-1" data-v-b6c8c7f7>Date</p><p class="text-sm font-medium tracking-wide text-accent" data-v-b6c8c7f7>${ssrInterpolate(__props.project.date)}</p></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b6c8c7f7"]]);
const _sfc_main = {
  __name: "[category]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const categoryParam = route.params.category;
    const { getProjectsByCategory } = useProjects();
    const filteredProjects = computed(() => {
      return getProjectsByCategory(categoryParam);
    });
    const formattedCategoryName = computed(() => {
      if (!categoryParam || categoryParam === "all") return "All Projects";
      return categoryParam.replace("-", " ");
    });
    const isModalOpen = ref(false);
    const selectedProject = ref(null);
    const handleOpenModal = (project) => {
      selectedProject.value = project;
      isModalOpen.value = true;
    };
    const handleCloseModal = () => {
      isModalOpen.value = false;
      setTimeout(() => {
        selectedProject.value = null;
      }, 500);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full bg-background font-sans text-text-primary selection:bg-black selection:text-white min-h-screen" }, _attrs))} data-v-19263817><section class="max-w-[1440px] mx-auto px-6 md:px-8 pt-32 pb-16 fade-in-up" data-v-19263817>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors mb-12 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowLeftIcon), { class: "w-3 h-3 mr-2 transition-transform duration-300 group-hover:-translate-x-1" }, null, _parent2, _scopeId));
            _push2(` Back to Projects `);
          } else {
            return [
              createVNode(unref(ArrowLeftIcon), { class: "w-3 h-3 mr-2 transition-transform duration-300 group-hover:-translate-x-1" }),
              createTextVNode(" Back to Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase text-accent" data-v-19263817>${ssrInterpolate(formattedCategoryName.value)}</h1>`);
      if (filteredProjects.value.length === 0) {
        _push(`<p class="mt-8 text-sm text-text-secondary tracking-widest uppercase" data-v-19263817> No projects found. </p>`);
      } else {
        _push(`<p class="mt-4 text-xs md:text-sm text-text-secondary tracking-widest uppercase" data-v-19263817>${ssrInterpolate(filteredProjects.value.length)} Project${ssrInterpolate(filteredProjects.value.length !== 1 ? "s" : "")}</p>`);
      }
      _push(`</section><section class="max-w-[1440px] mx-auto px-6 md:px-8 pb-32" data-v-19263817>`);
      if (filteredProjects.value.length > 0) {
        _push(`<div class="columns-1 md:columns-2 lg:columns-3 gap-6 w-full fade-in-up delay-100" data-v-19263817><!--[-->`);
        ssrRenderList(filteredProjects.value, (project) => {
          _push(ssrRenderComponent(_sfc_main$2, {
            key: project.id,
            project,
            onOpenModal: handleOpenModal
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(ProjectModal, {
        "is-open": isModalOpen.value,
        project: selectedProject.value,
        onClose: handleCloseModal
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _category_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19263817"]]);
export {
  _category_ as default
};
//# sourceMappingURL=_category_-CJZgVaaL.js.map
