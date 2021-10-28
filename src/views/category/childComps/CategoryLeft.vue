<template>
  <Scroll class="content-left">
    <NavMenu @click.native="changecontent(index)" v-for="(item,index) in item" :key="index" :item="item" :class="{active:activeStyle(index)}"></NavMenu>
  </Scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import NavMenu from './NavMenu.vue'
export default {
  name:'CategoryLeft',
  components:{Scroll,NavMenu},
  props:{
    item:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      // 记录当前谁处于活跃状态
      currentIndex:0
    }
  },
  methods:{
    activeStyle(index){
      return this.currentIndex == index
    },
    changecontent(index){
      this.currentIndex = index
      this.$emit('changecontent',index)
    }
  }
}
</script>

<style scoped>
  .active{
    background: #fff;
    color: #1296db;
  }
</style>