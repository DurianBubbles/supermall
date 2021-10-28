<template>
  <div class="carditem">
      <div class="icon">
          <slot></slot>
      </div>
      <div class="desc">{{info}}</div>
  </div>
</template>

<script>
export default {
  name:'ProfileCardItem',
  props:{
      info:{
          type:String,
          default:''
      }
  }
}
</script>

<style scoped>
  .carditem{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding: 8px 0;
  }

  .icon{
      margin-right: 10px;
  }

  .icon img{
      width: 20px;
      height: 20px;
  }

  .desc{
      font-size: 18px;
  }
</style>