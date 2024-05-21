// /** 获取Token */
// export function getToken(): Api.Auth.LoginToken | null {
// 	if (!localStorage.getItem('token')) return null;
// 	return JSON.parse(localStorage.getItem('token') || '')['token'];
// }
//
// /** 获取用户信息 */
// export function getUserInfo(): Api.Auth.UserInfo | null {
// 	if (!localStorage.getItem('userInfo')) return null;
// 	return JSON.parse(localStorage.getItem('userInfo') || '')['userInfo'];
// }
//
// /** 清除Auth信息 */
// export function clearAuthStorage() {
// 	localStorage.removeItem('token');
// 	localStorage.removeItem('userInfo');
// }
