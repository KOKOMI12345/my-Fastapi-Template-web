import type { Router } from 'vue-router';
import { useAuthStore } from "@/store/modules/auth";

/**
 * 创建路由守卫
 *
 * @param router 路由实例
 */
export function createRouteGuard(router: Router) {
	router.beforeEach(async (to, _, next) => {

		const authStore = useAuthStore();
		// 首先检查是否已登录
		if (authStore.isLogin) {
			// 如果已登录，检查是否有用户信息
			if (authStore.hasUserInfo) {
				// 如果是登录页面，重定向到首页
				if (to.name === 'login') {
					next('/');
				} else {
					next(); // 否则继续访问目标路由
				}
			} else {
				// 如果没有用户信息，尝试获取
				try {
					const userInfo = await authStore.getUserInfo;
					console.log("userInfo", userInfo)
					if (userInfo) {
						next(); // 获取成功，继续访问目标路由
					} else {
						next('/login'); // 获取失败，重定向到登录页面
					}
				} catch (error) {
					console.error('Failed to get user info:', error);
					next('/login'); // 捕获异常，重定向到登录页面
				}
			}
		} else {
			// 如果未登录，重定向到登录页面
			if(to.name !== 'login') {
				next('/login');
			} else {
				next();
			}
		}
	});
}