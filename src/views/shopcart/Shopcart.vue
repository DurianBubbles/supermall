<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </NavBar>
    <ShopCartList :goodsinfo="cartdata"></ShopCartList>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ShopCartList from './childComps/ShopCartList.vue'
import {mapGetters} from 'vuex'
export default {
  name:'ShopCart',
  components:{NavBar,ShopCartList},
  computed:{
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