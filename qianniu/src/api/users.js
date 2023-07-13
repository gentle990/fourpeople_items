import http from '../utils/http'
// import { useUsersStore } from '@/stores/users'  //目的是将token存储到pinia中，做本地持久化存储
import { useUsersStore } from '../stores/users'

function login(data) {//登录,这个接口不需要授权，所以不需要在请求头中使用 Authorization 字段提供 token 令牌。
  return http.post('http://www.tangxiaoyang.vip:8888/api/v2/login', data)
}
function orders() {
  return http.get('http://www.tangxiaoyang.vip:8888/api/v2/orders')
}

 function info() {//获取用户信息，这个接口需要授权，所以需要在请求头中使用 Authorization 字段提供 token 令牌。
  // const usersStore = useUsersStore()

  let id = useUsersStore().userid
  console.log(id)

  return http.get('http://www.tangxiaoyang.vip:8888/api/v2/users/'+id)
} 

export {
  login,
  info,
  orders
}