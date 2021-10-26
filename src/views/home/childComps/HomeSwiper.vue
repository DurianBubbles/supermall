<template>
  <Swiper>
      <SwiperItem v-for="item in result" :key="item.index">
        <img :src="item.url" alt="" >
      </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  name:'HomeSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    // 图片数据
    result:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
