import Layout from '@/layouts/base-layout/index.vue'

const routes = [
	{
		name: 'root',
		path: '/',
        redirect: '/dashboard',
	},
    {
        path: '/dashboard',
        component: Layout,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: {
                    title: 'dashboard',
                },
            },
        ],
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: 'login',
        },
    },
    {
        path: '/about',
        component: Layout,
        children: [
            {
                path: '',
                name: 'about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    title: 'about',
                },
            },
        ],
    },
]

export default routes