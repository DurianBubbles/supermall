<template>
  <div class="recommend">
    <div v-for="item in recomend" :key="item.index">
      <img :src="item.url" alt="">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recomend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 8px solid #eee;
  }

  .recommend>div{
    flex: 1;
  }

  .recommend img{
    width: 45px;
    height: 45px;
  }

  .recommend p{
    font-size: 12px;
  }
</style>
