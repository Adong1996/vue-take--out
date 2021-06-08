/*
  对axios 进行2次封装一个能发ajax 请求的函数
 */
import axios from "axios";
import qs from 'qs'
const instance = axios.create({
  timeout: 20000,
  baseURL: 'http://localhost:4000'
})

//请求拦截器
  instance.interceptors.request.use((config)=>{
    const data = config.data
    if(data instanceof Object) {
      config.data = qs.stringify(data)
    }
    return config
  })
//响应拦截器
  instance.interceptors.response.use(
    response => {
      //return response
      return response.data
    },
    error => {
      //return Promise.reject(error)
      //同一处理异常
      alert('请求出错' + error.message)
      return new Promise(()=>{})
    }
  )
  export default instance