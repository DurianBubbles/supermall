<template>
  <!-- 对单个商品信息进行展示，并监听点击事件，跳转到对应详情页 -->
  <div class="goods-card" @click="itemClick">
    <img :src="goodsitem.url" alt="" @load="imgloadend">
    <p class="itemtittle">{{goodsitem.tittle}}</p>
    <p><span class="price">{{goodsitem.price | priceFormat}}</span><span class="star">{{goodsitem.star}}</span></p>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgloadend(){
      // 抛出图片加载完成，让Home组件对scroll组件高度进行一个刷新
      this.$emit('imgloadend')
    },
    itemClick(){
      // 给详情页传递商品ID
      this.$router.push('/detail/'+this.goodsitem.id)
    }
  },
  filters:{
    priceFormat(price){
      return '￥' + price
    }
  }
}
</script>

<style scoped>
  .goods-card{
    width: 45%;
    margin-bottom: 10px;
  }

  .goods-card img{
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }

  .goods-card p{
    font-size: 12px;
  }

  .itemtittle{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price{
    color: #1296db;
    margin-right: 20px;
  }

  .star{
    position: relative;
  }

  .star:after{
    content: '';
    position: absolute;
    top: 0;
    left: -11px;
    width: 12px;
    height: 12px;
    background: url(~assets/img/home/star.svg) 0 0/12px 12px;
  }
</style>
