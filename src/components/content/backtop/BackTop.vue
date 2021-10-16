<template>
  <div class="backtop">
    <img src="~assets/img/home/backtop.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}
</script>

<style scoped>
  .backtop{
    position: fixed;
    right: 10px;
    bottom: 55px;
  }

  .backtop img{
    width: 33px;
    height: 33px;
  }
</style>
