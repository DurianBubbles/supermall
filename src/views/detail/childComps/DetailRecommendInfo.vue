<template>
  <div class="recommend">
    <GoodsList :goods="recommend" @imgloadend="excuimgloadend"></GoodsList>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList.vue'
export default {
  name:'DetailRecommendInfo',
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{GoodsList},
  methods:{
    excuimgloadend(){
      this.$emit("imgloadend")
    }
  }
}
</script>

<style scoped>
  .recommend{
    background: #fff;
    padding-top: 10px;
  }
</style>
