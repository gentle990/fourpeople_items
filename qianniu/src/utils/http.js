
import axios from 'axios'


//通用功能
const instance = axios.create({
  //localhost:8080/api/ 
  baseURL: '/api',
  //请求超时
  timeout: 5000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


// 统一请求接口的写法

const http = {
  // 查询数据
  get(url, data, config) {
    return instance.get(url, {...config, params: data})
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
    return instance.delete(url, {...config, data})
  }
}

export default http