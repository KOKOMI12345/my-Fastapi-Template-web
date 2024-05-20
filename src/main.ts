import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import {setupStore} from "@/store"

const app: any = createApp(App)
app.use(router)
setupStore(app)
app.mount('#app')
