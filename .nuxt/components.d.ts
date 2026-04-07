
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


export const AboutPreview: typeof import("../components/AboutPreview.vue")['default']
export const AppFooter: typeof import("../components/AppFooter.vue")['default']
export const AppNavbar: typeof import("../components/AppNavbar.vue")['default']
export const ApproachSection: typeof import("../components/ApproachSection.vue")['default']
export const CustomCursor: typeof import("../components/CustomCursor.vue")['default']
export const FaqSection: typeof import("../components/FaqSection.vue")['default']
export const FeaturedSection: typeof import("../components/FeaturedSection.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const HomeCTA: typeof import("../components/HomeCTA.vue")['default']
export const MarqueeSection: typeof import("../components/MarqueeSection.vue")['default']
export const ProcessPreview: typeof import("../components/ProcessPreview.vue")['default']
export const ProjectCard: typeof import("../components/ProjectCard.vue")['default']
export const ProjectModal: typeof import("../components/ProjectModal.vue")['default']
export const ServicesSection: typeof import("../components/ServicesSection.vue")['default']
export const ShowroomSection: typeof import("../components/ShowroomSection.vue")['default']
export const StatementSection: typeof import("../components/StatementSection.vue")['default']
export const StatsSection: typeof import("../components/StatsSection.vue")['default']
export const TestimonialSection: typeof import("../components/TestimonialSection.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAboutPreview: LazyComponent<typeof import("../components/AboutPreview.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../components/AppFooter.vue")['default']>
export const LazyAppNavbar: LazyComponent<typeof import("../components/AppNavbar.vue")['default']>
export const LazyApproachSection: LazyComponent<typeof import("../components/ApproachSection.vue")['default']>
export const LazyCustomCursor: LazyComponent<typeof import("../components/CustomCursor.vue")['default']>
export const LazyFaqSection: LazyComponent<typeof import("../components/FaqSection.vue")['default']>
export const LazyFeaturedSection: LazyComponent<typeof import("../components/FeaturedSection.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyHomeCTA: LazyComponent<typeof import("../components/HomeCTA.vue")['default']>
export const LazyMarqueeSection: LazyComponent<typeof import("../components/MarqueeSection.vue")['default']>
export const LazyProcessPreview: LazyComponent<typeof import("../components/ProcessPreview.vue")['default']>
export const LazyProjectCard: LazyComponent<typeof import("../components/ProjectCard.vue")['default']>
export const LazyProjectModal: LazyComponent<typeof import("../components/ProjectModal.vue")['default']>
export const LazyServicesSection: LazyComponent<typeof import("../components/ServicesSection.vue")['default']>
export const LazyShowroomSection: LazyComponent<typeof import("../components/ShowroomSection.vue")['default']>
export const LazyStatementSection: LazyComponent<typeof import("../components/StatementSection.vue")['default']>
export const LazyStatsSection: LazyComponent<typeof import("../components/StatsSection.vue")['default']>
export const LazyTestimonialSection: LazyComponent<typeof import("../components/TestimonialSection.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
