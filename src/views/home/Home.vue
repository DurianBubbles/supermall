<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png" alt="">
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {request} from '@/network/request.js'
export default {
  name:'Home',
  components:{
    NavBar
  },
  created(){
    request({
      url:'/headers'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
  .home-nav{
    background: #1296db;
    color: #fff;
  }
</style>