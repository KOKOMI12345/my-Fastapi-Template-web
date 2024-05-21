import type { App } from 'vue';
import {routes} from './routes'
import {createRouter, createWebHistory} from "vue-router";
import {createRouterGuard} from "./guard";


const router = createRouter({
    history: createWebHistory(),
    routes
})

export const setupRouter = (app: App) => {
    app.use(router)
    createRouterGuard(router)
}