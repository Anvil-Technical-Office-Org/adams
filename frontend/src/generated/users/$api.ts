/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_user_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _user_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * ユーザーIDに紐づくユーザー情報を取得します。
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | | |
         *
         * > 今のところ使用予定なし
         * @returns OK
         */
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * ユーザーIDに紐づくユーザー情報を取得します。
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | | |
         *
         * > 今のところ使用予定なし
         * @returns OK
         */
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * ユーザーIDに紐づくユーザー情報を更新します。
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | | ● |
         * @returns OK
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * ユーザーIDに紐づくユーザー情報を更新します。
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | | ● |
         * @returns OK
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        /**
         * ユーザー退会時に呼び出すAPI
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | | ● |
         */
        delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * ユーザー退会時に呼び出すAPI
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | | ● |
         */
        $delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * 当システムを利用している全ユーザーを取得します。
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | | |
     *
     * > 今のところ使用予定なし
     * @returns OK
     */
    get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 当システムを利用している全ユーザーを取得します。
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | | |
     *
     * > 今のところ使用予定なし
     * @returns OK
     */
    $get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * サインアップ時に呼び出すAPI
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | | ● |
     * @returns Created
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * サインアップ時に呼び出すAPI
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | | ● |
     * @returns Created
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
