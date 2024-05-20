import axios from 'axios'
import {useMessage} from 'naive-ui';
import {getToken} from '@/utils/auth'

const service = axios.create({
	baseURL: '/api',
	timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
	const token = getToken()
	if (token) {
		config.headers['Authorization'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
	}
	return config
}, error => {
	// Do something with request error
	console.log(error) // for debug
	Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(
	response => {
		const res = response.data
		if (res.code !== import.meta.env.VITE_SERVICE_SUCCESS_CODE) {
			const message = useMessage()
			message.error(res.msg)
			return Promise.reject(new Error(res.msg))
		} else {
			return response.data
		}
	},
	error => {
		console.log('err' + error)
		const message = useMessage()
		message.error("error")
		return Promise.reject(error)
	})

export default service