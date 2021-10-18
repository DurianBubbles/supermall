<template>
  <div class="goodsinfo">
    <div v-for="(item,index) in goodsinfoimage" :key="index">
      <img :src="item" alt="" @load="goodsInfoimgloadend">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  data(){
    return{
      counter:0,
      imagesLength:0
    }
  },
  props:{
    goodsinfoimage:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    goodsInfoimgloadend(){
      if(++this.counter === this.imagesLength){
        this.$emit('goodsInfoimgloadend')
      }
    }
  },
  watch:{
    goodsinfoimage(){
      this.imagesLength = this.goodsinfoimage.length
    }
  }
}
</script>

<style scoped>
  .goodsinfo{
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
  }

  .goodsinfo div img{
    width: 100%;
  }
</style>
