import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import {createHtmlPlugin} from "vite-plugin-html";
import ElegantVueRouter from "@elegant-router/vue/vite";


export default defineConfig(configEnv => {
	const {mode} = configEnv;
	const appTitle = loadEnv(mode, process.cwd()).VITE_APP_TITLE;
	const targetUrl = loadEnv(mode, process.cwd()).VITE_SERVICE_BASE_URL;
	return {
		plugins: [
			vue(),
			Components({
				resolvers: [NaiveUiResolver()],
			}),
			ElegantVueRouter({
				alias: {
					"@": "src",
				},
				layouts: {
					blank: "src/layouts/blank-layout/index.vue",
					base: "src/layouts/base-layout/index.vue",
				},
			}),
			createHtmlPlugin({
				inject: {
					data: {
						title: appTitle
					},
				},
			}),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			}
		},
		server: {
			proxy: {
				'/api': {
					target: targetUrl,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		}
	};
});
