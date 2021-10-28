<template>
  <div class="category">
    <NavBar class="nav-bar">
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="content">
      <div class="box">
        <CategoryLeft :item="menuitem" class="scroll-left" @changecontent="excuchange"></CategoryLeft>
      </div>
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
      allcontentItem:[],
      singleContent:[]
    }
  },
  created(){
    getcategory().then(res => {
      res.data.allCategory.forEach(item => {
        this.menuitem.push(item.tittle)
      });
      this.allcontentItem = res.data.allCategory
      this.singleContent = res.data.allCategory[0].content
    })
  },
  methods:{
    excuchange(index){
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