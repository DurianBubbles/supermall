<template>
  <div class="item">
    <p class="top">{{item.num}}<span>{{item.sub}}</span></p>
    <p class="bottom">{{item.text}}</p>
  </div>
</template>

<script>
export default {
  name:'ProfileInfoItem',
  props:{
      item:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style scoped>
  .item{
      flex: 1;
      height: 80px;
      padding: 20px 20px;
      box-sizing: border-box;
      text-align: center;
  }

  .top{
      font-size: 22px;
      color: #1296db;
  }

  .top span{
      font-size: 12px;
      color: #666666;
  }

  .bottom{
      font-size: 12px;
  }
</style>