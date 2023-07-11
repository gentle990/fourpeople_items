import http from "../utils/http"
//更新店铺
function updateShop(data) {
  return http.post('/shops/update', data)
}
//查询店铺
function findShop(data){
  return http.get('/shops/find',data)
}
export {
  updateShop,
  findShop
}