import http from '../utils/http'

function orders(params) {
  return http.get('http://www.tangxiaoyang.vip:8888/api/v2/orders',params)
}

export {
  orders
}