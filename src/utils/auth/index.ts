/** 获取Token */
export function getToken(): Api.Auth.LoginToken {
	return JSON.parse(localStorage.getItem('token') || '')['token'] || {};
}

/** 获取用户信息 */
export function getUserInfo(): Api.Auth.UserInfo {
	const emptyInfo: Api.Auth.UserInfo = {
		userId: '',
		username: '',
		roles: [],
		permissions: []
	};
	return JSON.parse(localStorage.getItem('userInfo') || '')['userInfo'] || emptyInfo;
}

/** 清除Auth信息 */
export function clearAuthStorage() {
	localStorage.removeItem('token');
	localStorage.removeItem('userInfo');
}
