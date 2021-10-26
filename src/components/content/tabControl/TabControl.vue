<template>
  <div class="tab-control">
    <div v-for="(item,index) in tittles" :key="index"
    :class="{active:activeStyle(index)}" 
    @click="clickTab(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    tittles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      // 记录当前谁处于活跃状态
      currentindex:0
    }
  },
  methods:{
    // 活跃状态添加active类
    activeStyle(index){
      return this.currentindex === index
    },
    clickTab(index){
      this.currentindex = index
      this.$emit('subindex',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    width: 100%;
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    z-index: 9;
  }

  .tab-control>div{
    flex: 1;
  }

  .active{
    color: #1296db;
  }

  .active span{
    border-bottom: 2px solid #1296db;
    padding:3px;
  }
</style>
