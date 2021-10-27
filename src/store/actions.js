import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'
export default {
    addCart(context, payload) {
        return new Promise((resolve) => {
            // 判断新添加的商品是否已经添加过了
            let oldProduct = context.state.cartList.find(item => item.id === payload.id)
            if (oldProduct) {
                // 添加过了，数量加1
                // 调用mutations中的方法
                context.commit(ADD_COUNTER, oldProduct)
                resolve('商品数量+1')
            } else {
                // 第一次添加设置count为1
                payload.count = 1
                // 调用mutations中的方法
                context.commit(ADD_TO_CART, payload)
                resolve('添加商品成功')
            }
        })
    }
}