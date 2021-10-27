import {ADD_COUNTER,ADD_TO_CART} from './mutations-types'
export default {
    // 购物车商品+1
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    // 将商品添加到购物车
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload)
    }
}