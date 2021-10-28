<template>
  <div class="item-box">
      <ProfileCardItem :info="cardInfo[0]">
        <img src="~assets/img/profile/message.svg" alt="">
      </ProfileCardItem>
      <ProfileCardItem :info="cardInfo[1]">
        <img src="~assets/img/profile/score.svg" alt="">
      </ProfileCardItem>
      <ProfileCardItem :info="cardInfo[2]">
        <img src="~assets/img/profile/vip.svg" alt="">
      </ProfileCardItem>
  </div>
</template>

<script>
import ProfileCardItem from './ProfileCardItem.vue'
export default {
  name:'ProfileCard1',
  components:{ProfileCardItem},
  data(){
    return {
      cardInfo:['我的消息','积分商城','会员卡']
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