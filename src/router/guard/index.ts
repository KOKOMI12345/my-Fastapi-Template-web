import type { Router } from 'vue-router';
import { createRouteGuard } from './route';

/**
 * Router guard
 *
 * @param router - Router instance
 */
export function createRouterGuard(router: Router) {
	createRouteGuard(router);
}
