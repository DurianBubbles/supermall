<template>
  <div class="toast" v-show="show">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  props:{
      message:{
          type:String,
          default:''
      },
      show:{
          type:Boolean,
          default:false
      }
  }
}
</script>

<style scoped>
  .toast{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: rgba(18,150,219,.8);
      padding: 10px 20px;
      border-radius: 10px;
      color: #fff;
  }
</style>