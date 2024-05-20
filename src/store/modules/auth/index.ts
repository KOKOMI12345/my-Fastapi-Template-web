import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {login, refreshToken, getUserInfo} from '@/service/api/auth'



const useUserInfoStore = defineStore('userInfo', () => {
	const userInfo: Ref<Api.Auth.UserInfo> = ref({
		userId: '',
		username: '',
		roles: [] as string[],
		permissions: [] as string[]
	})

	return {userInfo}
}, {
	persist: true,
})

const useTokenStore = defineStore('token', () => {
	const token: Ref<Api.Auth.LoginToken> = ref({
		token: '',
		refreshToken: ''
	})

	return {token}
}, {
	persist: true,
})

export const useAuthStore = defineStore('auth', () => {
	const userInfoStore = useUserInfoStore()
	const tokenStore = useTokenStore()

	const loginByToken = async (loginToken: Api.Auth.LoginToken) => {
		tokenStore.token = loginToken
		try {
			const {data: info} = await getUserInfo()
			userInfoStore.userInfo = info
			return true
		} catch (e) {
			return false
		}


	}

	const doLogin = async (username: string, password: string) => {
		const {data: loginToken} = await login(username, password)
		const pass = await loginByToken(loginToken);
		if (pass) {
			return true
		}
		return false
	}

	const doRefreshToken = async () => {
		const res = await refreshToken(tokenStore.token.refreshToken)
		tokenStore.token = res.data
	}

	return {
		doLogin,
		doRefreshToken,
	}
})