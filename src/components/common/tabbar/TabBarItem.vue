<template>
  <!-- 当元素被点击,实现三个功能 -->
  <!-- 1.切换活跃时的图片 -->
  <!-- 2.切换文字颜色 -->
  <!-- 3.切换对应路由 -->
  <div class="tab-bar-item" @click="itemclick">
    <!-- 活跃状态 -->
    <div v-if="isActive"><slot name='item-icon-active'></slot></div>
    <!-- 不活跃状态 -->
    <div v-else><slot name='item-icon'></slot></div>
    <div :style='activestyle'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    // 路由路径
    path:String,
    // 活跃状态文字颜色,默认值:#99CCCC
    activecolor:{
      type:String,
      default:'#99CCCC'
    }
  },
  computed:{
    isActive(){
      // 功能1-切换活跃时的图片:
      // this.$route.path拿到当前处于活跃状态的路由字符串,然后跟自己的path进行对比
      // indexOf()返回字符串值在字符串中首次出现的位置,也就是
      // 返回this.path字符串在this.$route.path字符串中首次出现的位置,
      // 如果未找到,则返回-1
      return this.$route.path.indexOf(this.path) !== -1
    },
    activestyle(){
      // 功能2-切换文字颜色:
      // this.isActive判断当前元素是否为活跃状态
      // 根据不同情况,给定样式
      return this.isActive ? {color:this.activecolor} : {}
    }
  },
  methods:{
    itemclick(){
      // 功能3-切换对应路由:
      // this.$router拿到路由对象,调用replace方法切换路由,replace方法不可返回
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    /* 去除img自带的外边距 */
    vertical-align: middle;
  }
</style>