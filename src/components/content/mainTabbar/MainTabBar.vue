<template>
  <TabBar>
    <TabBarItem path='/home' activecolor='#1296db'>
      <img slot='item-icon' src="~assets/img/tabbar/home.svg" alt="home">
      <img slot='item-icon-active' src="~assets/img/tabbar/home-active.svg" alt="home">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path='/category' activecolor='#1296db'>
      <img slot='item-icon' src="~assets/img/tabbar/category.svg" alt="category">
      <img slot='item-icon-active' src="~assets/img/tabbar/category-active.svg" alt="category">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path='/shopcart' activecolor='#1296db'>
      <img slot='item-icon' src="~assets/img/tabbar/shopcart.svg" alt="shopcart">
      <img slot='item-icon-active' src="~assets/img/tabbar/shopcart-active.svg" alt="shopcart">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path='/profile' activecolor='#1296db'>
      <img slot='item-icon' src="~assets/img/tabbar/profile.svg" alt="profile">
      <img slot='item-icon-active' src="~assets/img/tabbar/profile-active.svg" alt="profile">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>