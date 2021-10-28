<template>
  <div class="menu-item">
    {{item}}
  </div>
</template>

<script>
export default {
  name:'NavMenu',
  props:{
    item:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>
  .menu-item{
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #666;
    background: #eee;
    padding: 5px 0;
  }
</style>