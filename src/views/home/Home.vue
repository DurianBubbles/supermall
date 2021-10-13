<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :result="result"></HomeSwiper>
    <RecommendView :recomend="recomend"></RecommendView>
    <Popular :popular="popular"></Popular>
    <TabControl :tittles="['流行','新款','精选']"></TabControl>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import Popular from './childComps/Popular.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'

import {getHomeMultidata} from 'network/home.js'


export default {
  name:'Home',
  data(){
    return{
      result:null,
      recomend:null,
      popular:null
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    Popular,
    TabControl
  },
  created(){
    getHomeMultidata().then(res => {
      this.result = res.data.homedata.swiperdata;
      this.recomend = res.data.homedata.recommend;
      this.popular = res.data.homedata.popular;
    })
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #1296db;
    color: #fff;
    z-index: 9;
  }
</style>
