import request from '@/service/requent'

export const login = (username: string, password: string) => {
	return request({
		url: '/auth/login',
		method: 'post',
		data: {
			username,
			password
		}
	})
}

export const refreshToken = (refreshToken: string) => {
	return request({
		url: '/auth/refreshToken',
		method: 'post',
		data: {
			refreshToken
		}
	})
}

export const fetchUserInfo = () => {
	return request({
		url: '/auth/getUserInfo',
		method: 'get',
	})

}