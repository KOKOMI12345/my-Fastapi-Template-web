import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {login, refreshToken, fetchUserInfo} from '@/service/api/auth'


const useUserInfoStore = defineStore('userInfo', () => {
	const userId = ref('')
	const username = ref('')
	const roles = ref([] as string[])
	const permissions = ref([] as string[])


	return {
		userId,
		username,
		roles,
		permissions
	}
}, {
	persist: true,
})

const useTokenStore = defineStore('token', () => {
	const token = ref('')
	const refreshToken = ref('')

	return {
		token,
		refreshToken
	}
}, {
	persist: true,
})

export const useAuthStore = defineStore('auth', () => {
	const userInfoStore = useUserInfoStore()
	const tokenStore = useTokenStore()

	const doLogin = async (username: string, password: string) => {
		const {data: loginToken} = await login(username, password)
		return await loginByToken(loginToken);

	}

	const loginByToken = async (loginToken: Api.Auth.LoginToken) => {
		tokenStore.token = loginToken.token
		tokenStore.refreshToken = loginToken.refreshToken
		const {data: info} = await fetchUserInfo()
		if (info) {
			userInfoStore.userId = info.userId
			userInfoStore.username = info.username
			userInfoStore.roles = info.roles
			userInfoStore.permissions = info.permissions
			return true
		}
		return false
	}

	const doRefreshToken = async () => {
		const {data: loginToken} = await refreshToken(tokenStore.refreshToken)
		if (loginToken) {
			tokenStore.token = loginToken.token
			tokenStore.refreshToken = loginToken.refreshToken
			return true
		}
		return false
	}

	const getUserInfo = computed(async () => {
		return {
			userId: userInfoStore.userId,
			username: userInfoStore.username,
			roles: userInfoStore.roles,
			permissions: userInfoStore.permissions
		}
	})

	const getToken = computed(() => {
		return {
			token: tokenStore.token,
			refreshToken: tokenStore.refreshToken
		}
	})



	const clearAuthStorage = () => {
		userInfoStore.$reset()
		tokenStore.$reset()
	}

	const isLogin = computed(() => Boolean(tokenStore.token));
	const hasUserInfo = computed(() => Boolean(userInfoStore.userId));

	return {
		doLogin,
		doRefreshToken,
		getUserInfo,
		clearAuthStorage,
		isLogin,
		hasUserInfo,
		getToken
	}
})