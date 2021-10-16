<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
    scrollPosition:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.scrollPosition
    }),
    this.scroll.on('scroll',(position) => {
      this.$emit('nowposition',position)
    })
  },
  methods:{
    backTop(x,y,time){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>

</style>
