<template>
  <div class="item-box">
      <ProfileCardItem :info="cardInfo[0]">
        <img src="~assets/img/profile/cart.svg" alt="">
      </ProfileCardItem>
      <ProfileCardItem :info="cardInfo[1]">
        <img src="~assets/img/profile/download.svg" alt="">
      </ProfileCardItem>
  </div>
</template>

<script>
import ProfileCardItem from './ProfileCardItem.vue'
export default {
  name:'ProfileCard2',
  components:{ProfileCardItem},
  data(){
    return {
      cardInfo:['我的购物车','下载购物APP']
    }
  }
}
</script>

<style scoped>
  .item-box{
    padding: 0 20px;
    border-top: 15px solid #eee;
  }
</style>