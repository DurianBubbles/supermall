import {request} from 'network/request.js'

export function getHomeMultidata(){
  return request({
    url:'test.json'
  })
}
