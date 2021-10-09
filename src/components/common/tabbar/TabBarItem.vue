<template>
  <div class="tab-bar-item" @click="itemclick">
    <!-- 未点击状态 -->
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <!-- 点击状态 -->
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style='activestyle'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activecolor:{
      type:String,
      default:'#99CCCC'
    }
  },
  computed:{
    isActive(){
      // this.$route.path拿到当前处于活跃状态的路由字符串
      return this.$route.path.indexOf(this.path) !== -1
    },
    activestyle(){
      return this.isActive ? {color:this.activecolor} : {}
    }
  },
  methods:{
    itemclick(){
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
    font-size: 14px;
    /* 去除img自带的外边距 */
    vertical-align: middle;
  }
</style>