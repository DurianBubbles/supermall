<template>
  <div class="params">
    <ul>
      <li v-for="(item,index) in paraminfo" :key="index">
        <span class="name">{{item.key}}</span>
        <span class="cont">{{item.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'DetailParamsInfo',
  props:{
    paraminfo:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .params{
    background: #fff;
    padding: 30px 10px 0 10px;
    border-top: 5px solid #e6e6e6;
    border-bottom: 5px solid #e6e6e6;
  }

  .params li{
    display: flex;
    height: 40px;
    border-bottom: 1px solid #e6e6e6;
    align-items: center;
  }

  .params li .name{
    flex: 1;
  }

  .params li .cont{
    flex:2;
    color: #1296db;
  }
</style>
