<template>
  <div class="detail-swiper">
    <Swiper class="swiper-item">
      <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  name:'TopSwiper',
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .swiper-item{
    text-align: center;
    height: 45vh;
  }

  .swiper-item img{
    width:100%;
    height: 45vh;
  }
</style>
