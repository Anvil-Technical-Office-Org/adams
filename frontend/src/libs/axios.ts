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

export default axios

/** Aspida Client */
export const client = api(aspida(axios))
