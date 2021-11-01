<template>
  <div class="category">
    <!-- 顶部栏 -->
    <NavBar class="nav-bar">
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="content">
      <div class="box">
        <!-- 分类Button -->
        <CategoryLeft :item="menuitem" class="scroll-left" @changecontent="excuchange"></CategoryLeft>
      </div>
      <!-- 详细分类 -->
      <CategoryRight :item="singleContent"></CategoryRight>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CategoryLeft from './childComps/CategoryLeft.vue'
import CategoryRight from './childComps/CategoryRight.vue'
import {getcategory} from 'network/category.js'
export default {
  name:'Category',
  components:{NavBar,CategoryLeft,CategoryRight},
  data(){
    return {
      // 左侧导航栏的内容
      menuitem:[],
      // 详细导航栏内容
      allcontentItem:[],
      // 根据左侧导航栏，加载对应详细内容
      singleContent:[]
    }
  },
  created(){
    // 获取数据
    getcategory().then(res => {
      // 获取左侧导航栏内容
      res.data.allCategory.forEach(item => {
        this.menuitem.push(item.tittle)
      });
      // 获取所有详细内容
      this.allcontentItem = res.data.allCategory
      // 获取第一个详细内容
      this.singleContent = res.data.allCategory[0].content
    })
  },
  methods:{
    // 左侧导航栏点击事件
    excuchange(index){
      // 加载对应详细信息
      this.singleContent = this.allcontentItem[index].content
    }
  }
}
</script>

<style scoped>
 .nav-bar{
   background: #1296db;
   color: #fff;
 }

 .content{
   display: flex;
   position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;
   overflow: hidden;
 }

 .scroll-left{
   height: 100%;
   overflow: hidden;
 }

 .box{
   background: #eee;
   flex: 1;
   height: 100%;
 }
</style>