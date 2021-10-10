import axios from 'axios'

export function request(config){
    const instance =  axios.create({
        baseURL:'http://localhost:8080/',
        timeout:5000
    })
    
    // 请求拦截器
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err)
    })

    //响应拦截器
    instance.interceptors.request.use(res => {
        return res.data
    },err => {
        console.log(err)
    })

    // 发送网络请求
    return instance(config)
}