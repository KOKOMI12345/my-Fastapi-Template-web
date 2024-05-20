import request from '@/service/requent'

export function login(username:string, password: string) {
	return request<Api.Auth.LoginToken>({
		url: '/auth/login',
		method: 'post',
		data: {
			username,
			password
		}
	})
}

export function refreshToken(refreshToken: string) {
	return request<Api.Auth.LoginToken>({
		url: '/auth/refreshToken',
		method: 'post',
		data: {
			refreshToken
		}
	})
}

export function getUserInfo() {
	return request<Api.Auth.UserInfo>({
		url: '/auth/getUserInfo',
		method: 'get',
	})
}