<template>
  <!-- Home组件包含内容: 
       NavBar(顶部栏) HomeSwiper(轮播图) RecommendView(推荐栏) Popular(流行栏) 
       TabControl(控制栏) GoodsList(商品列表) Scroll(滚动组件) BackTop(返回顶部按钮)
  -->
  <div id="home">
    <!-- 顶部栏 -->
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <!-- 用于实现吸顶效果 -->
    <TabControl v-show="isShowTabControl" :tittles="['流行','新款','精选']" :currentindex="tabcontrolstyle" class="tabcontrol" @subindex="goodsitem"></TabControl>
    <!-- nowposition监听位置 -->
    <!-- loadmore监听加载更多 -->
    <Scroll class="outside" ref="scroll"
      :scrollPosition="3"
      :pullUpLoad="true"
      @nowposition="excuposition"
      @loadmore="exculoadmore">
        <!-- 轮播图 -->
        <HomeSwiper :result="result"></HomeSwiper>
        <!-- 推荐 -->
        <RecommendView :recomend="recomend"></RecommendView>
        <!-- 流行 -->
        <Popular :popular="popular"></Popular>
        <TabControl ref="tabControl" :tittles="['流行','新款','精选']" :currentindex="tabcontrolstyle" class="tabcontrol" @subindex="goodsitem"></TabControl>
        <!-- 商品展示模块 -->
        <!-- imgloadend监听GoodsList中图片加载完成之后，让Home组件对scroll的高度进行一个刷新 -->
        <GoodsList :goods="goodslist" @imgloadend="excurefresh"></GoodsList>
    </Scroll>
    <!-- 返回顶部按钮 -->
    <!-- 组件监听点击事件，需要加上.native -->
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

// getHomeMultidata 获取test.json数据
// getHomeGoodsdata 获取goods.json数据
import {getHomeMultidata,getHomeGoodsdata} from 'network/home.js'


export default {
  name:'Home',
  data(){
    return{
      // HomeSwiper数据
      result:[],
      // RecommendView数据
      recomend:[],
      // Popular数据
      popular:[],
      // goods传递给GoodsList组件的数据模型
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      tabcontrolvalue:['pop','news','sell'],
      // 决定GoodsList显示不同的数据
      currentvalue:'pop',
      // 控制 返回顶部按钮 是否显示
      isShow:false,
      // 同步tabcontrol样式
      tabcontrolstyle:0,
      // tabControl的offsetTop值
      taboffsetTop:0,
      // 是否显示吸顶效果
      isShowTabControl:false
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
    // 获取三个组件中的数据
    getHomeMultidata().then(res => {
      // HomeSwiper数据
      this.result = res.data.homedata.swiperdata;
      // RecommendView数据
      this.recomend = res.data.homedata.recommend;
      // Popular数据
      this.popular = res.data.homedata.popular;
    })

    // 获取第一页 流行 商品数据
    this.classifyGoodsdata('pop')
    // 获取第一页 新款 商品数据
    this.classifyGoodsdata('news')
    // 获取第一页 精选 商品数据
    this.classifyGoodsdata('sell')
  },
  methods:{
    // 根据 不同板块 获取每一页数据
    classifyGoodsdata(type){
      let page = this.goods[type].page;
      getHomeGoodsdata().then(res => {
        this.goods[type].list.push(...res.data[type][page].list);
      });
      this.goods[type].page += 1;
    },
    // 切换 板块
    goodsitem(index){
      // 加载不同板块信息
      this.currentvalue = this.tabcontrolvalue[index];
      // 同步样式
      this.tabcontrolstyle = index
    },
    // 返回顶部
    backtopclick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    // scroll发生滚动
    excuposition(position){
      // 控制 返回顶部按钮 是否显示
      this.isShow = -(position.y) > 850
      this.isShowTabControl = -(position.y) > this.taboffsetTop
    },
    // 上拉加载更多
    exculoadmore(){
      this.classifyGoodsdata(this.currentvalue)
    },
    // GoodsList中图片加载完成，刷新scroll高度
    excurefresh(){
      // 500 为防抖函数等待时长
      let fun = this.debounce(this.$refs.scroll.refreshHeight,500)
      fun()
      // 获取tabcontrol offsetTop值
      this.taboffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    // 解决频繁请求scroll的refresh()函数，防抖函数
    debounce(func,delay){
      let timer = null
      // 这里...args结构数组,args接受数组参数
      return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    }
  },
  computed:{
    goodslist(){
      // 显示对应模块内容
      return this.goods[this.currentvalue].list
    }
  }
  // home tabControl吸顶效果思路：scroll组件中一个tabControl组件，navBar下方一个tabControl组件，首先监听home Swiper中的图片加载完成，然后emit到home，获取tabControl offsetTop，保存到data,
  // 在excuposition方法中，将position.y与offsetTop的值，做对比，大于则显示navBar下方的tabControl组件，小于则隐藏该组件，用v-show实现
  // 同步tabControl中选中问题，保持两个组件index相同


  // home位置保存思路
  //将router-view 加上 keep-alive ， 然后在Home.vue中，加上activated(scrollTo设置scroll组件的Y值，并刷新refresh)、deactivated(保存离开时，当前scroll组件的Y值)函数，

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
