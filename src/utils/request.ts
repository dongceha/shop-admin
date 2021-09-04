import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: ''
  // baseURL: import.meta.env.VITE_API_BASEURL
//   baseURL: 'https://shop.fed.lagou.com/api/admin'
})

request.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

request.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => 
  request(config).then(res => res.data.data as T)
