<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <Scroll class="outside" ref="scroll"
      :scrollPosition="3"
      :pullUpLoad="true"
      @nowposition="excuposition"
      @loadmore="exculoadmore" >
      <HomeSwiper :result="result"></HomeSwiper>
      <RecommendView :recomend="recomend"></RecommendView>
      <Popular :popular="popular"></Popular>
      <TabControl class="tabcontrol" :tittles="['流行','新款','精选']" @subindex="goodsitem"></TabControl>
      <GoodsList :goods="goodslist" @imgloadend="excurefresh"></GoodsList>
    </Scroll>
    <BackTop @click.native="backtopclick" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import Popular from './childComps/Popular.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'

import {getHomeMultidata,getHomeGoodsdata} from 'network/home.js'


export default {
  name:'Home',
  data(){
    return{
      result:[],
      recomend:[],
      popular:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      tabcontrolvalue:['pop','news','sell'],
      currentvalue:'pop',
      isShow:false
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    Popular,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created(){
    getHomeMultidata().then(res => {
      this.result = res.data.homedata.swiperdata;
      this.recomend = res.data.homedata.recommend;
      this.popular = res.data.homedata.popular;
    })

    this.classifyGoodsdata('pop')
    this.classifyGoodsdata('news')
    this.classifyGoodsdata('sell')
  },
  methods:{
    classifyGoodsdata(type){
      let page = this.goods[type].page;
      getHomeGoodsdata().then(res => {
        this.goods[type].list.push(...res.data[type][page].list);
      });
      this.goods[type].page += 1;
    },
    goodsitem(index){
      this.currentvalue = this.tabcontrolvalue[index];
    },
    backtopclick(){
      this.$refs.scroll.backTop(0,0,500)
    },
    excuposition(position){
      this.isShow = -(position.y) > 850
    },
    exculoadmore(){
      this.classifyGoodsdata(this.currentvalue)
    },
    excurefresh(){
      this.$refs.scroll.refreshHeight()
    }
  },
  computed:{
    goodslist(){
      return this.goods[this.currentvalue].list
    }
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
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

  .tabcontrol{
    position: sticky;
    top: 44px;
    background: #fff;
  }

  .outside{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
</style>
