<template>
  <div class="goods">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsitem="item" @imgloadend="upimgloadend"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem.vue'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  },
  methods:{
    upimgloadend(){
      this.$emit('imgloadend')
    }
  }
}
</script>

<style scoped>
  .goods{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  }


</style>
