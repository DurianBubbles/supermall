<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:'Home',
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .home-nav{
    background: #1296db;
    color: #fff;
  }
</style>