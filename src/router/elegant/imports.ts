/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { RouteComponent } from "vue-router";
import type { LastLevelRouteKey, RouteLayout } from "@elegant-router/types";

import BlankLayout from "@/layouts/blank-layout/index.vue";
import BaseLayout from "@/layouts/base-layout/index.vue";

export const layouts: Record<RouteLayout, RouteComponent | (() => Promise<RouteComponent>)> = {
  blank: BlankLayout,
  base: BaseLayout,
};

export const views: Record<LastLevelRouteKey, RouteComponent | (() => Promise<RouteComponent>)> = {
  about: () => import("@/views/about/index.vue"),
  dashboard: () => import("@/views/dashboard/index.vue"),
  login: () => import("@/views/login/index.vue"),
  "not-found": () => import("@/views/not-found/index.vue"),
};
