import Axios from 'axios'
import aspida from '@aspida/axios'
import api from '~/generated/$api'

// TODO : 実行環境によるbaseURLの設定

// 素のAxiosを生成
// 基本はAspidaを利用して通信を行うが、一応Axiosも生成しておく
const mockUrl = 'http://localhost:3001'
const devUrl = 'http://localhost:8080/v1'
const axios = Axios.create({
  // baseURL: mockUrl,
  baseURL: devUrl,
  withCredentials: true,
})

/** Responseの共通処理を定義 */
axios.interceptors.response.use(
  response => response,
  error => {
    console.log('============HTTP Request failure============')
    if (Axios.isAxiosError(error)) {
      console.log(error.message)
      console.log(error.response)
    }
    throw error
  }
)
export default axios

/** Aspida Client */
export const client = api(aspida(axios))
