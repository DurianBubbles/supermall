<template>
  <div class="goods-card" @click="itemClick">
    <img :src="goodsitem.url" alt="" @load="imgloadend">
    <p class="itemtittle">{{goodsitem.tittle}}</p>
    <p><span class="price">{{goodsitem.price}}</span><span class="star">{{goodsitem.star}}</span></p>
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
      this.$emit('imgloadend')
    },
    itemClick(){
      this.$router.push('/detail'+this.goodsitem.id)
    }
  }
}
</script>

<style scoped>
  .goods-card{
    width: 45%;
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
