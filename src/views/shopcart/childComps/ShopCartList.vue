<template>
  <Scroll class="scrollbox">
    <ShopCartListItem v-for="(item,index) in goodsinfo" :key="index" :item="item" :index="index"></ShopCartListItem>
  </Scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import ShopCartListItem from './ShopCartListItem.vue'
export default {
  name:'ShopCartList',
  props:{
    goodsinfo:{
      type:Array,
      default(){
          return []
      }
    }
  },
  components:{
      Scroll,ShopCartListItem
  }
}
</script>

<style scoped>
  .scrollbox{
    position: absolute;
    top: 44px;
    bottom: 79px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>