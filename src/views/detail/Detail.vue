<template>
  <div class="detail">
    <DetailNavBar @itemclick="itemclick" ref="navBar"></DetailNavBar>
    <Scroll class="content" ref="scroll" @nowposition="contentposition" :scrollPosition="3">
      <TopSwiper :topImages="topImages" ref="topswiper"></TopSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shopinfo="shopinfo"></DetailShopInfo>
      <DetailGoodsInfo :goodsinfoimage="goodsinfo" @goodsInfoimgloadend="goodsInfoimgloadend" ref="goods"></DetailGoodsInfo>
      <DetailParamsInfo :paraminfo="paraminfo" ref="params"></DetailParamsInfo>
      <DetailRecommendInfo :recommend="recommend" @imgloadend="excuimgloadend" ref="recommend"></DetailRecommendInfo>
    </Scroll>
    <DetailBottomBar @addCart="exeuaddcart"></DetailBottomBar>
    <BackTop @click.native="backtopclick" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar.vue'
import {getDetail,DetailGoods,getHomeGoodsdata} from 'network/detail.js'
import TopSwiper from './childComps/TopSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetailRecommendInfo from './childComps/DetailRecommendInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
import BackTop from 'components/content/backtop/BackTop.vue'

export default {
  name:'Detail',
  data(){
    return{
      // 展示商品的ID
      goodsId:null,
      // 顶部轮播图的url
      topImages:[],
      // DetailBaseInfo的数据
      goods:{},
      // DetailGoodsInfo的数据
      goodsinfo:[],
      // 商家信息
      shopinfo:{},
      // 参数信息
      paraminfo:[],
      // 推荐商品信息
      recommend:[],
      // 保存商品，详情，参数，推荐四个板块的offsetTop值
      currentY:[],
      // 返回顶部按钮是否显示
      isShow:false
    }
  },
  created(){
    // 获取商品ID
    this.goodsId = this.$route.params.id
    // 根据商品ID获取商品数据
    getDetail().then(res => {
      // 获取轮播图图片url
      this.topImages = res.data.goods[this.goodsId].topImages
      // 获取价格，标题等信息
      this.goods = new DetailGoods(res.data.goods[this.goodsId].itemInfo,
      res.data.goods[this.goodsId].columns)
      //获取详情图片
      this.goodsinfo = res.data.goods[this.goodsId].goodsinfo.url
      //获取商家信息
      this.shopinfo = res.data.goods[this.goodsId].shopinfo
      // 获取参数
      this.paraminfo = res.data.goods[this.goodsId].paraminfo
    }),
    // 获取推荐商品数据
    getHomeGoodsdata().then(res => {
      this.recommend = res.data.pop[0].list
    })
  },
  components:{
    DetailNavBar,
    TopSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    BackTop,
    Scroll
  },
  methods:{
    // 图片加载完成，刷新scroll高度，并记录四个组建的offsetTop值
    goodsInfoimgloadend(){
      // 刷新高度
      this.excuimgloadend()
      this.currentY = []
      this.currentY.push(this.$refs.topswiper.$el.offsetTop)
      this.currentY.push(this.$refs.goods.$el.offsetTop)
      this.currentY.push(this.$refs.params.$el.offsetTop)
      this.currentY.push(this.$refs.recommend.$el.offsetTop)
    },
    // 刷新scroll高度
    excuimgloadend(){
      this.$refs.scroll.refreshHeight()
    },
    // 监听DetailNavBar点击事件，根据index值，调整scrollY值
    itemclick(index){
      this.$refs.scroll.scrollTo(0,-this.currentY[index],500)
    },
    // 当前滚动位置
    contentposition(position){
      const positionY = -position.y
      // 返回顶部按钮是否显示
      this.isShow = positionY > 850
      // 当scroll滚动时，决定DetailNavBar中哪个按钮处于活跃状态
      let length = this.currentY.length
      for(let i = 0; i < length; i++ ){
        if((i< length-1 && positionY>=this.currentY[i] && positionY < this.currentY[i+1]) ||
        (i === length -1 && positionY >= this.currentY[i])){
          this.$refs.navBar.currentIndex = i
        }
      }
    },
    // 返回顶部
    backtopclick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    // 点击加入购物车执行
    exeuaddcart(){
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.tittle = this.goods.tittle
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.id = this.$route.params.id
      product.checked = false
      
      // 放入vuex中
      this.$store.dispatch('addCart',product)
    }
  }
}
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    height: 100vh;
  }

  .content{
    height:calc(100% - 44px - 49px) ;
    overflow: hidden;
  }
</style>
