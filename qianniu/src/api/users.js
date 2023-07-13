
import http from '../utils/http'

function sendYzm(data) {
  return http.get('/users/yzm', data)
}

function login(data) {
  return http.post('/users/login', data)
}

function info() {
  return http.get('/users/info')
}

export {
  sendYzm,
  login,
  info
}