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

export default {
  name:'Detail',
  data(){
    return{
      goodsId:null,
      topImages:[],
      goods:{},
      goodsinfo:[],
      shopinfo:{},
      paraminfo:[],
      recommend:[],
      currentY:[],
      currentIndex:0
    }
  },
  created(){
    this.goodsId = this.$route.params.id
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
    Scroll
  },
  methods:{
    goodsInfoimgloadend(){
      this.$refs.scroll.refreshHeight()
      this.currentY = []
      this.currentY.push(this.$refs.topswiper.$el.offsetTop)
      this.currentY.push(this.$refs.goods.$el.offsetTop)
      this.currentY.push(this.$refs.params.$el.offsetTop)
      this.currentY.push(this.$refs.recommend.$el.offsetTop)
    },
    excuimgloadend(){
      this.$refs.scroll.refreshHeight()
    },
    itemclick(index){
      this.$refs.scroll.scrollTo(0,-this.currentY[index],500)
    },
    contentposition(position){
      const positionY = -position.y
      let length = this.currentY.length
      for(let i = 0; i < length; i++ ){
        if((i< length-1 && positionY>=this.currentY[i] && positionY < this.currentY[i+1]) ||
        (i === length -1 && positionY >= this.currentY[i])){
          this.$refs.navBar.currentIndex = i
        }
      }
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
    height:calc(100% - 44px) ;
    overflow: hidden;
  }
</style>
