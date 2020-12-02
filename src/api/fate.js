import request from './request.js'
import qs from 'qs'

export function getList (parameter) {
  return request({
    url: `http://fgo.vgtime.com/servant/ajax?${qs.stringify(parameter)}`,
    method: 'get'
  })
}