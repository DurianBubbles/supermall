<template>
  <div class="bottombar">
      <div class="icon">
          <CheckBotton class="checkbtn" :isChecked="isSelectAll" @click.native="selectAll"></CheckBotton>
          <div>全选</div>
      </div>
      <div class="totalPrice">总价：{{totalPrice}}</div>
      <div class="settle">结算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckBotton from './CheckBotton.vue'
export default {
  name:'BottomBar',
  components:{CheckBotton},
  computed:{
      totalPrice(){
          return this.$store.state.cartList.filter(item => {
              return item.checked
          }).reduce((preValue,item) => {
              return preValue + parseFloat(item.price) * item.count
          },0).toFixed(2)
      },
      checkLength(){
          return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
          return !this.$store.state.cartList.find(item => !item.checked)
      }
  },
  methods:{
      selectAll(){
        if(this.isSelectAll){
            this.$store.state.cartList.forEach(item => item.checked = false)
        }else{
            this.$store.state.cartList.forEach(item => item.checked = true)
        }
      }
  }
}
</script>

<style scoped>
  .bottombar{
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

  .totalPrice{
      flex: 1;
  }

  .settle{
      width: 70px;
      height: 100%;
      background: #1296db;
      padding: 2px 5px;
      box-sizing: border-box;
      line-height: 26px;
      text-align: center;
  }

  .icon{
      display: flex;
      margin-right: 20px;
  }

  .checkbtn{
      margin-right: 5px;
  }
</style>