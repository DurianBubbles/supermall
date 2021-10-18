<template>
  <div class="baseinfo">
    <div class="tittle">{{goods.tittle}}</div>
    <div class="priceinfo">
      <span class="realPrice">{{goods.realPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="noticeinfo">
      <span class="sales">销量 {{goods.sales}}</span>
      <span class="star">收藏{{goods.star}}人</span>
      <span class="sendtime">{{goods.sendtime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .baseinfo{
    padding: 12px 10px;
  }

  .tittle{
    font-size: 16px;
    color: #262626;
    font-weight: 700;
  }

  .priceinfo .realPrice{
    color: #f2270c;
    font-size: 30px;
  }

  .priceinfo .oldPrice{
    text-decoration: line-through;
    margin-left: 5px;
  }

  .priceinfo .discount{
    display: inline-block;
    background: #f2270c;
    border-radius: 10px;
    padding: 2px 4px;
    font-size: 12px;
    margin-left: 5px;
    vertical-align: top;
    font-weight: 700;
    color: #fff;
    line-height: 12px;
  }

  .noticeinfo{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    color: #8c8c8c;
    font-size: 13px;
  }
</style>
