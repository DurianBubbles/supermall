<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </NavBar>
    <!-- 展示购物车内的商品 -->
    <ShopCartList :goodsinfo="cartdata"></ShopCartList>
    <!-- 包含全选、统计总价 -->
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ShopCartList from './childComps/ShopCartList.vue'
import BottomBar from './childComps/BottomBar.vue'
// 将vuex中getters内的方法 指向computed
import {mapGetters} from 'vuex'
export default {
  name:'ShopCart',
  components:{NavBar,ShopCartList,BottomBar},
  computed:{
    // cartListLength 获取购物车商品的数量
    // cartdata 获取购物车所有商品的信息
    ...mapGetters(['cartListLength','cartdata'])
  }
}
</script>

<style scoped>
.nav-bar{
  background: #1296db;
  color: #fff;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
}
</style>