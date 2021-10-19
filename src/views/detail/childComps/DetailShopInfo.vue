<template>
  <div class="shopinfo">
    <div class="noticeinfo">
      <span v-for="(item,index) in shopinfo.noticeitem" :key="index">
        <span class="littleicon"></span>{{item}}
      </span>
    </div>
    <div class="card">
      <div class="nameicon">
        <span><img :src="shopinfo.shopiconurl" alt=""></span>
        <p>{{shopinfo.shopname}}</p>
      </div>
      <div class="total">
        <div class="sales">
          <p class="num">{{shopinfo.totalsales}}</p>
          <p class="text">总销量</p>
        </div>
        <div class="babys">
          <p class="num">{{shopinfo.totalbaby}}</p>
          <p class="text">全部宝贝</p>
        </div>
        <div class="goodsscore">
          <p>评价<span>{{highorlow(shopinfo.evaluatescore)}}</span></p>
          <p>物流<span>{{highorlow(this.shopinfo.logisticsscore)}}</span></p>
          <p>售后<span>{{highorlow(this.shopinfo.aftersalescore)}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    shopinfo:{
      type:Object,
      defalut(){
        return {}
      }
    }
  },
  methods:{
    highorlow(num){
      if(num>=9 && num <10){
        return num ? num.toFixed(2)+' | 高':0
      }else if(num>=8 && num<9){
        return num ? num.toFixed(2)+' | 中':0
      }else{
        return num ? num.toFixed(2)+' | 低':0
      }
    }
  }
}
</script>

<style scoped>
  .shopinfo{
    width: 100%;
    border-top: 5px solid #e6e6e6;
    border-bottom: 2px solid #e6e6e6;
    background: #fff;
  }

  .shopinfo .noticeinfo{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 10px;
    font-size: 15px;
  }

  .shopinfo .noticeinfo span{
    width: 33%;
    position: relative;
    line-height: 17px;
  }

  .shopinfo .noticeinfo .littleicon{
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(~assets/img/detail/arrow.svg) no-repeat 0 1px/15px 15px;
  }

  .shopinfo .noticeinfo span:nth-child(3n+1){
    text-align: left;
  }

  .shopinfo .noticeinfo span:nth-child(3n+3){
    text-align: right;
  }

  .nameicon{
    display: flex;
    align-items: center;
    padding: 20px 10px;
  }

  .nameicon span{
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  .nameicon span img{
    width: 100%;
    height: 100%;
  }

  .nameicon p{
    font-size: 15px;
    margin-left: 15px;
  }

  .total{
    padding: 0 10px;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 10px;
    padding-bottom: 20px;
  }

  .sales,.babys{
    flex: 1;
  }

  .babys{
    border-right: 1px solid #666666;
  }

  .total .num{
    font-size: 20px;
    font-weight: 700;
  }

  .goodsscore{
    padding: 0 20px;
    text-align: left;
  }

  .goodsscore p span{
    color: #e4393c;
    margin-left: 7px;
  }

</style>
