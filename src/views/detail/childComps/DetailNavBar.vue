<template>
  <div>
     <NavBar>
       <div class="back-icon" slot="left" @click="goback">
         <img src="~assets/img/detail/back.svg" alt="">
       </div>
       <div class="tittle" slot="center">
         <div v-for="(item,index) in tittles"
         :key="index"
         :class="{active: index === currentIndex}"
         @click="tittleClick(index)"
         >{{item}}</div>
       </div>
     </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data(){
    return {
      tittles:['商品','详情','参数','推荐'],
      // 记录当前活跃按钮
      currentIndex:0
    }
  },
  methods:{
    tittleClick(index){
      this.currentIndex = index
      this.$emit('itemclick',index)
    },
    goback(){
      // 返回上一步路由
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .tittle{
    display: flex;
    font-size: 13px;
  }

  .tittle>div{
    flex: 1;
  }

  .active{
    color: #1296db;
  }

  .back-icon{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back-icon img{
    width: 25px;
    height: 25px;
  }
</style>
