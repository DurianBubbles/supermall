<template>
  <div class="info">
    <ProfileInfoItem v-for="(item,index) in info" :key="index" :item="item"></ProfileInfoItem>
  </div>
</template>

<script>
import ProfileInfoItem from './ProfileInfoItem.vue'
export default {
  name:'ProfileInfo',
  components:{ProfileInfoItem},
  data(){
      return {
          info:[
              {num:"0.00",sub:'元',text:'我的余额'},
              {num:"0",sub:'个',text:'我的优惠'},
              {num:"0",sub:'分',text:'我的积分'}
          ]
      }
  }
}
</script>

<style scoped>
  .info{
      display: flex;
  }
</style>