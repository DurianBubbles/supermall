import {request} from 'network/request.js'

export function getHomeMultidata(){
  return request({
    url:'test.json'
  })
}

export function getHomeGoodsdata(){
  return request({
    url:'goods.json'
  })
}
