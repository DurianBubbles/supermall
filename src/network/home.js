import {request} from 'network/request.js'

// 获取test.json数据
export function getHomeMultidata(){
  return request({
    url:'test.json'
  })
}

// 获取goods.json数据
export function getHomeGoodsdata(){
  return request({
    url:'goods.json'
  })
}
