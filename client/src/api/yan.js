import request from './request.js'
import qs from 'qs'

export function getImages() {
  return request({
    url: `https://yande.re/post/popular_recent`,
    method: 'get'
  })
}