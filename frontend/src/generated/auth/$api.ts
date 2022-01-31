/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './signin'
// prettier-ignore
import { Methods as Methods1 } from './signout'
// prettier-ignore
import { Methods as Methods2 } from './signup'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/signin'
  const PATH1 = '/auth/signout'
  const PATH2 = '/auth/signup'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    signin: {
      /**
       * ユーザー情報を元に認証処理をして、成功したらアクセストークンを発行して返却します。
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
       * ユーザー情報を元に認証処理をして、成功したらアクセストークンを発行して返却します。
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
    },
    signout: {
      /**
       * サインアウトをした際に、Cookieから認証情報を削除します。
       */
      delete: (option?: { config?: T }) =>
        fetch<void, Methods1['delete']['resHeaders'], Methods1['delete']['status']>(prefix, PATH1, DELETE, option).send(),
      /**
       * サインアウトをした際に、Cookieから認証情報を削除します。
       */
      $delete: (option?: { config?: T }) =>
        fetch<void, Methods1['delete']['resHeaders'], Methods1['delete']['status']>(prefix, PATH1, DELETE, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    signup: {
      /**
       * ユーザーによって入力された内容を元に、データベースにユーザーを作成し、アクセストークンを発行して返却します。
       *
       * ### 公開範囲
       * | ユーザー公開 | 管理画面 |
       * |:---:|:---:|
       * | | ● |
       * @returns 認証成功時のレスポンス
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * ユーザーによって入力された内容を元に、データベースにユーザーを作成し、アクセストークンを発行して返却します。
       *
       * ### 公開範囲
       * | ユーザー公開 | 管理画面 |
       * |:---:|:---:|
       * | | ● |
       * @returns 認証成功時のレスポンス
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
        fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
