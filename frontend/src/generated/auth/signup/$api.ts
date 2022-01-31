/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/signup'
  const POST = 'POST'

  return {
    /**
     * ユーザーによって入力された内容を元に、データベースにユーザーを作成し、アクセストークンを発行して返却します。
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | | ● |
     * @returns 認証成功時のレスポンス
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * ユーザーによって入力された内容を元に、データベースにユーザーを作成し、アクセストークンを発行して返却します。
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | | ● |
     * @returns 認証成功時のレスポンス
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
