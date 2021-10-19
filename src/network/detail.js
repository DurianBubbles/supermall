import {request} from 'network/request.js'

export function getDetail(){
  return request({
    url:'details.json'
  })
}

export function getHomeGoodsdata(){
  return request({
    url:'goods.json'
  })
}

export class DetailGoods{
  constructor(itemInfo,columns){
    this.tittle = itemInfo.tittle
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.newprice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discount
    this.realPrice = itemInfo.realPrice
    this.sales = columns.sales
    this.star = columns.star
    this.sendtime = columns.sendtime
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.logo
    this.name = shopInfo.name
    this.fans = shopInfo.fans
    this.sells = shopInfo.sells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.goods.Count
  }
}
