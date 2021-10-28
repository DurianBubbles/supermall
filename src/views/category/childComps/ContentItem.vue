<template>
  <div class="category-item">
    <img :src="item.url" alt="" @load="imgloadend">
    <p>{{item.desc}}</p>
  </div>
</template>

<script>
export default {
  name:'ContentItem',
  props:{
      item:Object,
      default(){
          return {}
      }
  },
  methods:{
    imgloadend(){
      this.$emit('imgloadend')
    }
  }
}
</script>

<style scoped>
  .category-item{
      width: 33%;
      float: left;
      text-align: center;
      margin-bottom: 10px;
  }

  .category-item img{
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
      border-radius: 50%;
  }

  .category-item p{
      font-size: 15px;
  }
</style>