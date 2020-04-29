import axios from 'axios'
// import { MessageBox } from 'element-ui'
// import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import Cookies from 'js-cookie'

console.log(process.env.VUE_APP_BASE_API)
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: 'http://0.0.0.0:8000/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
  timeout: 5000 // request timeout
})
Cookies.remove('csrftoken')
Cookies.remove('sessionid')
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (config.headers.Cookie) {
      console.log('config.headers.Cookie有内容')
      console.log(typeof config.headers.Cookie)
    }
    // console.log(config.headers)
    if (store.getters.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `JWT ${getToken()}`
      // console.log(getToken())
    }
    // config.headers['Access-Control-Allow-Origin'] = '*'
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  // response => {
  //   const res = response.data
  res => {
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    // if (res.code !== 200 && res.code !== 201 && res.code !== 204) {
    if (res.status !== 200 && res.status !== 201 && res.status !== 204) {
      // 单独处理错误信息
      // Message({
      //   // message: res.message || '网路错误@.@',
      //   message: '网路错误@.@',
      //   type: 'error',
      //   duration: 5 * 1000
      // })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      if (res.status === 50008 || res.status === 50012 || res.status === 50014) {
        // to re-login
        // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        // MessageBox.confirm('您已经登出系统，您可以留在当前页面或者重新登录', 'Confirm logout', {
          // confirmButtonText: 'Re-Login',
          // confirmButtonText: '重新登录',
          // cancelButtonText: 'Cancel',
          // cancelButtonText: '取消',
          // type: 'warning'
        // }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        // })
      }
      // return Promise.reject(res.message || 'error')
      return Promise.reject(res || 'error')
    } else {
      return res
    }
  },
  error => {
    // 不统一发送错误信息 单独处理
    // Message({
    //   // message: error.message,
    //   message: '网络错误@。@',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error.response)
  }
)

export default service
