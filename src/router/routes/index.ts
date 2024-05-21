import type { ElegantRoute, CustomRoute } from "@elegant-router/types";
import { generatedRoutes } from "../elegant/routes";
import { layouts, views } from "../elegant/imports";
import { transformElegantRoutesToVueRoutes } from "../elegant/transform";

const customRoutes: CustomRoute[] = [
	{
		name: "root",
		path: "/",
		redirect: {
			name: "dashboard",
		},
	},
];

const elegantRoutes: ElegantRoute[] = [...customRoutes, ...generatedRoutes];

export const routes = transformElegantRoutesToVueRoutes(
	elegantRoutes,
	layouts,
	views
);