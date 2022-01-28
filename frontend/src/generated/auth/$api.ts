/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth'
  const POST = 'POST'

  return {
    /**
     * ユーザー情報を元に認証処理をして、成功したらアクセストークンを発行して返却します。
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | | ● |
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * ユーザー情報を元に認証処理をして、成功したらアクセストークンを発行して返却します。
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | | ● |
     * @returns OK
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
