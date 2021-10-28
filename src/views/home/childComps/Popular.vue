<template>
  <div class="popular">
    <h2>本周流行</h2>
    <div class="iconbox">
      <div v-for="item in popular" :key="item.index">
        <img :src="item.url" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Popular',
  props:{
    popular:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .popular{
    width: 100%;
    text-align: center;
    padding-top: 10px;
  }

  .popular>h2{
    font-size: 16px;
  }

  .popular .iconbox{
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .popular .iconbox>div{
    width: 25%;
  }

  .popular .iconbox>div:nth-child(n+5){
    margin-top: 5px;
  }

  .popular .iconbox img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .popular .iconbox p{
    font-size: 12px;
  }
</style>
