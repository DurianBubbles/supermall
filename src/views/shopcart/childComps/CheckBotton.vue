<template>
  <div class="checkbtn" :class="{active:isChecked}">
      
  </div>
</template>

<script>
export default {
  name:'CheckBotton',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .checkbtn{
      width: 18px;
      height: 18px;
      background: url(~assets/img/cart/check.svg) no-repeat center/cover;
      margin-right: 10px;
  }

  .active{
      background: url(~assets/img/cart/checkd.svg) no-repeat center/cover;
  }
</style>