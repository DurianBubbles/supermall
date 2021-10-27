<template>
  <!-- 对商品展示整体进行布局 -->
  <div class="goods">
    <!-- 每个元素 -->
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsitem="item" @imgloadend="upimgloadend"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem.vue'
export default {
  name:'GoodsList',
  props:{
    // 拿到所有商品数据
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
