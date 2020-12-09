import request from './request.js'

export function login (data) {
  return request({
    url: 'http://127.0.0.1:7001/user/login',
    method: 'post',
    data: data
  })
}