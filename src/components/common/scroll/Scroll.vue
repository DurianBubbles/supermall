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
    },
    pullUpLoad:{
      type:Boolean,
      default:false
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
      probeType:this.scrollPosition,
      pullUpLoad:this.pullUpLoad
    }),
    this.scroll.on('scroll',(position) => {
      this.$emit('nowposition',position)
    })
    this.scroll.on('pullingUp',() => {
      this.$emit('loadmore')
      this.scroll.finishPullUp()
    })
  },
  methods:{
    scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    refreshHeight(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
