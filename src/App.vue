<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- app底部导航 控制路由切换 -->
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  /* 导入基础样式 */
  @import 'assets/css/base.css';
</style>
