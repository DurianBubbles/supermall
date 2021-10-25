import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    //   优化，参考github  或者 P213
    addCart(state,payload){
      let oldProduct = null
      for(let item of state.cartList){
          if(item.id === payload.id){
              oldProduct = item
          }
      }
      if(oldProduct){
          oldProduct.count += 1
      }else{
          payload.count = 1
          state.cartList.push(payload)
      }
    }
  },
  actions:{

  },
  getters:{
    cartListLength(state){
      return state.cartList.length
    },
    cartdata(state){
      return state.cartList
    }
  }
})

export default store
