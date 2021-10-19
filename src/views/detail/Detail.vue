<template>
  <div class="detail">
    <DetailNavBar></DetailNavBar>
    <Scroll class="content" ref="scroll">
      <TopSwiper :topImages="topImages"></TopSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shopinfo="shopinfo"></DetailShopInfo>
      <DetailGoodsInfo :goodsinfoimage="goodsinfo" @goodsInfoimgloadend="goodsInfoimgloadend"></DetailGoodsInfo>
      <DetailParamsInfo :paraminfo="paraminfo"></DetailParamsInfo>
      <DetailRecommendInfo :recommend="recommend" @imgloadend="excuimgloadend"></DetailRecommendInfo>
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
      recommend:[]
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
    },
    excuimgloadend(){
      this.$refs.scroll.refreshHeight()
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
