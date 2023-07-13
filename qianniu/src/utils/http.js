
import axios from 'axios'
import { useUsersStore } from '../stores/users'; //引入状态管理，获取token，为了在请求头中携带token，进行接口的校验，如果没有token，就不让访问接口，直接跳转到登录页面，进行登录，获取token，再进行接口的访问 ，这样就可以保证接口的安全性，防止接口被恶意访问。  



//通用功能
const instance = axios.create({
  //localhost:8080/api/ 
  baseURL: '/api',
  //请求超时
  timeout: 8000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // use函数，不能在.vue之外的文件进行调用，如果在非.vue文件中，使用use函数，需要在函数中进行调用，否则会报错，use函数只能在.vue文件中进行调用，如果在非.vue文件中使用use函数，需要在函数中进行调用，否则会报错
  const usersStore = useUsersStore()


  // 正的项目，需要携带token给后端校验的接口会非常多，所以我们不用每一个去传递token，而是把token关联到请求头信息里，这样只要发起ajax就会自动携带token到后端接口 
  // 携带请求token的字段，Authorization这个字段是后端规定的，不能随便写，必须写成Authorization，否则后端接口无法识别
  config.headers.Authorization = usersStore.token //需要授权的 API ，必须在请求头中使用 Authorization 字段提供 token 令牌
  // 在发送请求之前做些什么
  return config;
}, function (rid) {
  // 对请求错误做些什么
  return Promise.reject(rid);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (rid) {
  // 对响应错误做点什么
  return Promise.reject(rid);
});

 
// 统一请求接口的写法

const http = {
  // 查询数据
  get(url, data, config) {
    return instance.get(url, { ...config, params: data })
  },
  // 添加数据
  post(url, data, config) {
    return instance.post(url, data, config)
  },
  // 整体更新
  put(url, data, config) {
    return instance.put(url, data, config)
  },
  // 局部更新
  patch(url, data, config) {
    return instance.patch(url, data, config)
  },
  // 删除数据
  delete(url, data, config) {
    return instance.delete(url, { ...config, data })
  }
}

export default http