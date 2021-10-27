import axios from 'axios'

export function request(config){
    const instance =  axios.create({
      // http://192.168.1.4:8080/
      // http://localhost:8080/
        baseURL:'http://192.168.0.108:8080/',
        timeout:5000
    })

    // 请求拦截器
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err)
    })

    //响应拦截器
    instance.interceptors.response.use(res => {
        return res
    },err => {
        console.log(err)
    })

    // 发送网络请求
    return instance(config)
}
