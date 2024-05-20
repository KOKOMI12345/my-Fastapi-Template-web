import {defineStore} from "pinia";
import {ref} from "vue";

export const useThemeStore = defineStore('theme', () => {
	const theme = ref('dark')
	const toggleTheme = () => {
		theme.value = theme.value === 'dark' ? 'light' : 'dark';
	}

	return { theme, toggleTheme }
})