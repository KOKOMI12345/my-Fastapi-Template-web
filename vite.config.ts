import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import {createHtmlPlugin} from "vite-plugin-html";


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
