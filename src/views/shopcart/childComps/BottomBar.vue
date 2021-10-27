<template>
  <div class="bottombar">
    <div class="icon">
      <CheckBotton
        class="checkbtn"
        :isChecked="isSelectAll"
        @click.native="selectAll"
      ></CheckBotton>
      <div>全选</div>
    </div>
    <div class="totalPrice">总价：{{ totalPrice | totalPriceFormat}}</div>
    <div class="settle">结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckBotton from "./CheckBotton.vue";
export default {
  name: "BottomBar",
  components: { CheckBotton },
  computed: {
    // 计算选中商品的总价格
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + parseFloat(item.price) * item.count;
        }, 0)
        .toFixed(2);
    },
    // 选中状态商品的个数
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    // 判断购物车所有商品是否都checked(选中)
    isSelectAll() {
      //find 遍历数组，返回找到第一个符合条件的值
      if(this.$store.state.cartList.length === 0)  return false 
      return !this.$store.state.cartList.find(item => !item.checked);
    },
  },
  methods: {
    // 给购物车所有商品加上checked(选中) 或者 取消checked(选中)
    selectAll() {
      //  是否为全选状态
      if (this.isSelectAll) {
        // 商品全部设置为未选中
        this.$store.state.cartList.forEach(item => (item.checked = false));
      } else {
        // 商品全部设为选中
        this.$store.state.cartList.forEach(item => (item.checked = true));
      }
    },
  },
  filters:{
    // 给总价加个￥符号
    totalPriceFormat(price){
      return '￥'+ price
    }
  }
};
</script>

<style scoped>
.bottombar {
  height: 30px;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  background: #eee;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.totalPrice {
  flex: 1;
}

.settle {
  width: 70px;
  height: 100%;
  background: #1296db;
  padding: 2px 5px;
  box-sizing: border-box;
  line-height: 26px;
  text-align: center;
}

.icon {
  display: flex;
  margin-right: 20px;
}

.checkbtn {
  margin-right: 5px;
}
</style>