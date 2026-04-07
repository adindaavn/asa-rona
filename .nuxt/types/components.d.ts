
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AboutPreview: typeof import("../../components/AboutPreview.vue")['default']
  AppFooter: typeof import("../../components/AppFooter.vue")['default']
  AppNavbar: typeof import("../../components/AppNavbar.vue")['default']
  ApproachSection: typeof import("../../components/ApproachSection.vue")['default']
  CustomCursor: typeof import("../../components/CustomCursor.vue")['default']
  FaqSection: typeof import("../../components/FaqSection.vue")['default']
  FeaturedSection: typeof import("../../components/FeaturedSection.vue")['default']
  HeroSection: typeof import("../../components/HeroSection.vue")['default']
  HomeCTA: typeof import("../../components/HomeCTA.vue")['default']
  MarqueeSection: typeof import("../../components/MarqueeSection.vue")['default']
  ProcessPreview: typeof import("../../components/ProcessPreview.vue")['default']
  ProjectCard: typeof import("../../components/ProjectCard.vue")['default']
  ProjectModal: typeof import("../../components/ProjectModal.vue")['default']
  ServicesSection: typeof import("../../components/ServicesSection.vue")['default']
  ShowroomSection: typeof import("../../components/ShowroomSection.vue")['default']
  StatementSection: typeof import("../../components/StatementSection.vue")['default']
  StatsSection: typeof import("../../components/StatsSection.vue")['default']
  TestimonialSection: typeof import("../../components/TestimonialSection.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAboutPreview: LazyComponent<typeof import("../../components/AboutPreview.vue")['default']>
  LazyAppFooter: LazyComponent<typeof import("../../components/AppFooter.vue")['default']>
  LazyAppNavbar: LazyComponent<typeof import("../../components/AppNavbar.vue")['default']>
  LazyApproachSection: LazyComponent<typeof import("../../components/ApproachSection.vue")['default']>
  LazyCustomCursor: LazyComponent<typeof import("../../components/CustomCursor.vue")['default']>
  LazyFaqSection: LazyComponent<typeof import("../../components/FaqSection.vue")['default']>
  LazyFeaturedSection: LazyComponent<typeof import("../../components/FeaturedSection.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/HeroSection.vue")['default']>
  LazyHomeCTA: LazyComponent<typeof import("../../components/HomeCTA.vue")['default']>
  LazyMarqueeSection: LazyComponent<typeof import("../../components/MarqueeSection.vue")['default']>
  LazyProcessPreview: LazyComponent<typeof import("../../components/ProcessPreview.vue")['default']>
  LazyProjectCard: LazyComponent<typeof import("../../components/ProjectCard.vue")['default']>
  LazyProjectModal: LazyComponent<typeof import("../../components/ProjectModal.vue")['default']>
  LazyServicesSection: LazyComponent<typeof import("../../components/ServicesSection.vue")['default']>
  LazyShowroomSection: LazyComponent<typeof import("../../components/ShowroomSection.vue")['default']>
  LazyStatementSection: LazyComponent<typeof import("../../components/StatementSection.vue")['default']>
  LazyStatsSection: LazyComponent<typeof import("../../components/StatsSection.vue")['default']>
  LazyTestimonialSection: LazyComponent<typeof import("../../components/TestimonialSection.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
