import {ADD_COUNTER,ADD_TO_CART} from './mutations-types'
export default {
    addCart(context, payload) {
        // 判断新添加的商品是否已经添加过了
        let oldProduct = context.state.cartList.find(item => item.id === payload.id)
        if (oldProduct) {
            // 添加过了，数量加1
            // oldProduct.count += 1
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            // 第一次添加设置count为1
            payload.count = 1
            context.commit(ADD_TO_CART, payload)
        }
    }
}