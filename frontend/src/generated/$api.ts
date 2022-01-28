/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './auth'
// prettier-ignore
import { Methods as Methods1 } from './spaces'
// prettier-ignore
import { Methods as Methods2 } from './spaces/_space_id@string'
// prettier-ignore
import { Methods as Methods3 } from './spaces/_space_id@string/api_keys'
// prettier-ignore
import { Methods as Methods4 } from './spaces/_space_id@string/api_keys/_api_key_id@string'
// prettier-ignore
import { Methods as Methods5 } from './spaces/_space_id@string/content_models'
// prettier-ignore
import { Methods as Methods6 } from './spaces/_space_id@string/content_models/_content_id@string/content_fields/_content_field_id@string'
// prettier-ignore
import { Methods as Methods7 } from './spaces/_space_id@string/content_models/_content_model_id@string'
// prettier-ignore
import { Methods as Methods8 } from './spaces/_space_id@string/content_models/_content_model_id@string/content_fields'
// prettier-ignore
import { Methods as Methods9 } from './spaces/_space_id@string/content_models/_content_model_id@string/contents'
// prettier-ignore
import { Methods as Methods10 } from './spaces/_space_id@string/content_models/_content_model_id@string/contents/_content_id@string'
// prettier-ignore
import { Methods as Methods11 } from './users'
// prettier-ignore
import { Methods as Methods12 } from './users/_user_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth'
  const PATH1 = '/spaces'
  const PATH2 = '/api_keys'
  const PATH3 = '/content_models'
  const PATH4 = '/content_fields'
  const PATH5 = '/contents'
  const PATH6 = '/users'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    auth: {
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
    },
    spaces: {
      _space_id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          api_keys: {
            _api_key_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH2}/${val3}`

              return {
                /**
                 * スペース内で発行したAPI Keyを削除します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | | ● |
                 */
                delete: (option?: { config?: T }) =>
                  fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                /**
                 * スペース内で発行したAPI Keyを削除します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | | ● |
                 */
                $delete: (option?: { config?: T }) =>
                  fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            /**
             * スペース内のAPI Key一覧を取得します。
             *
             * ### 公開範囲
             * | ユーザー公開 | 管理画面 |
             * |:---:|:---:|
             * | | ● |
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * スペース内のAPI Key一覧を取得します。
             *
             * ### 公開範囲
             * | ユーザー公開 | 管理画面 |
             * |:---:|:---:|
             * | | ● |
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * スペース内に新規でAPI Keyを発行します。
             *
             * ### 公開範囲
             * | ユーザー公開 | 管理画面 |
             * |:---:|:---:|
             * | | ● |
             * @returns Created
             */
            post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * スペース内に新規でAPI Keyを発行します。
             *
             * ### 公開範囲
             * | ユーザー公開 | 管理画面 |
             * |:---:|:---:|
             * | | ● |
             * @returns Created
             */
            $post: (option: { body: Methods3['post']['reqBody'], config?: T }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          },
          content_models: {
            _content_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`

              return {
                content_fields: {
                  _content_field_id: (val5: string) => {
                    const prefix5 = `${prefix3}${PATH4}/${val5}`

                    return {
                      /**
                       * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドの情報を取得します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       * @returns OK
                       */
                      get: (option?: { config?: T }) =>
                        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix5, GET, option).json(),
                      /**
                       * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドの情報を取得します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       * @returns OK
                       */
                      $get: (option?: { config?: T }) =>
                        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                      /**
                       * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドを更新します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       * @returns OK
                       */
                      patch: (option: { body: Methods6['patch']['reqBody'], config?: T }) =>
                        fetch<Methods6['patch']['resBody'], BasicHeaders, Methods6['patch']['status']>(prefix, prefix5, PATCH, option).json(),
                      /**
                       * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドを更新します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       * @returns OK
                       */
                      $patch: (option: { body: Methods6['patch']['reqBody'], config?: T }) =>
                        fetch<Methods6['patch']['resBody'], BasicHeaders, Methods6['patch']['status']>(prefix, prefix5, PATCH, option).json().then(r => r.body),
                      /**
                       * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドを削除します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       */
                      delete: (option?: { config?: T }) =>
                        fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix5, DELETE, option).send(),
                      /**
                       * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドを削除します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       */
                      $delete: (option?: { config?: T }) =>
                        fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix5, DELETE, option).send().then(r => r.body),
                      $path: () => `${prefix}${prefix5}`
                    }
                  }
                }
              }
            },
            _content_model_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`

              return {
                content_fields: {
                  /**
                   * コンテンツモデル内のコンテンツフィールド一覧を取得します。
                   *
                   * ### 公開範囲
                   * | ユーザー公開 | 管理画面 |
                   * |:---:|:---:|
                   * | ● | ● |
                   * @returns OK
                   */
                  get: (option?: { config?: T }) =>
                    fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix3}${PATH4}`, GET, option).json(),
                  /**
                   * コンテンツモデル内のコンテンツフィールド一覧を取得します。
                   *
                   * ### 公開範囲
                   * | ユーザー公開 | 管理画面 |
                   * |:---:|:---:|
                   * | ● | ● |
                   * @returns OK
                   */
                  $get: (option?: { config?: T }) =>
                    fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix3}${PATH4}`, GET, option).json().then(r => r.body),
                  /**
                   * コンテンツモデル内に、コンテンツフィールドを新規作成します。
                   *
                   * ### 公開範囲
                   * | ユーザー公開 | 管理画面 |
                   * |:---:|:---:|
                   * | ● | ● |
                   * @returns Created
                   */
                  post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                    fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix3}${PATH4}`, POST, option).json(),
                  /**
                   * コンテンツモデル内に、コンテンツフィールドを新規作成します。
                   *
                   * ### 公開範囲
                   * | ユーザー公開 | 管理画面 |
                   * |:---:|:---:|
                   * | ● | ● |
                   * @returns Created
                   */
                  $post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                    fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix3}${PATH4}`, POST, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix3}${PATH4}`
                },
                contents: {
                  _content_id: (val5: string) => {
                    const prefix5 = `${prefix3}${PATH5}/${val5}`

                    return {
                      /**
                       * コンテンツIDに紐づく、コンテンツの情報を取得します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       * @returns OK
                       */
                      get: (option?: { config?: T }) =>
                        fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix5, GET, option).json(),
                      /**
                       * コンテンツIDに紐づく、コンテンツの情報を取得します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       * @returns OK
                       */
                      $get: (option?: { config?: T }) =>
                        fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                      /**
                       * コンテンツIDに紐づく、コンテンツの情報を更新します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       * @returns OK
                       */
                      patch: (option?: { config?: T }) =>
                        fetch<Methods10['patch']['resBody'], BasicHeaders, Methods10['patch']['status']>(prefix, prefix5, PATCH, option).json(),
                      /**
                       * コンテンツIDに紐づく、コンテンツの情報を更新します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       * @returns OK
                       */
                      $patch: (option?: { config?: T }) =>
                        fetch<Methods10['patch']['resBody'], BasicHeaders, Methods10['patch']['status']>(prefix, prefix5, PATCH, option).json().then(r => r.body),
                      /**
                       * コンテンツIDに紐づく、コンテンツを削除します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       */
                      delete: (option?: { config?: T }) =>
                        fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix5, DELETE, option).send(),
                      /**
                       * コンテンツIDに紐づく、コンテンツを削除します。
                       *
                       * ### 公開範囲
                       * | ユーザー公開 | 管理画面 |
                       * |:---:|:---:|
                       * | ● | ● |
                       */
                      $delete: (option?: { config?: T }) =>
                        fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix5, DELETE, option).send().then(r => r.body),
                      $path: () => `${prefix}${prefix5}`
                    }
                  },
                  /**
                   * スペースのコンテンツモデルIDに紐づく、コンテンツ一覧を取得します。
                   *
                   * ### 公開範囲
                   * | ユーザー公開 | 管理画面 |
                   * |:---:|:---:|
                   * | ● | ● |
                   * @returns OK
                   */
                  get: (option: { query: Methods9['get']['query'], config?: T }) =>
                    fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix3}${PATH5}`, GET, option).json(),
                  /**
                   * スペースのコンテンツモデルIDに紐づく、コンテンツ一覧を取得します。
                   *
                   * ### 公開範囲
                   * | ユーザー公開 | 管理画面 |
                   * |:---:|:---:|
                   * | ● | ● |
                   * @returns OK
                   */
                  $get: (option: { query: Methods9['get']['query'], config?: T }) =>
                    fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix3}${PATH5}`, GET, option).json().then(r => r.body),
                  /**
                   * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルにコンテンツを新規作成します。
                   *
                   * ### 公開範囲
                   * | ユーザー公開 | 管理画面 |
                   * |:---:|:---:|
                   * | ● | ● |
                   * @param option.body - リクエストボディは、ユーザーが任意で設定したコンテンツフィールドによるためここでは定義しない
                   * @returns Created
                   */
                  post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
                    fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix3}${PATH5}`, POST, option).json(),
                  /**
                   * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルにコンテンツを新規作成します。
                   *
                   * ### 公開範囲
                   * | ユーザー公開 | 管理画面 |
                   * |:---:|:---:|
                   * | ● | ● |
                   * @param option.body - リクエストボディは、ユーザーが任意で設定したコンテンツフィールドによるためここでは定義しない
                   * @returns Created
                   */
                  $post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
                    fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix3}${PATH5}`, POST, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get'; query: Methods9['get']['query'] }) =>
                    `${prefix}${prefix3}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                },
                /**
                 * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルの情報を取得します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns OK
                 */
                get: (option?: { config?: T }) =>
                  fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルの情報を取得します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns OK
                 */
                $get: (option?: { config?: T }) =>
                  fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                /**
                 * スペース内のコンテンツモデルIDい紐づく、コンテンツモデルの情報を更新します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns OK
                 */
                patch: (option: { body: Methods7['patch']['reqBody'], config?: T }) =>
                  fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, prefix3, PATCH, option).json(),
                /**
                 * スペース内のコンテンツモデルIDい紐づく、コンテンツモデルの情報を更新します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns OK
                 */
                $patch: (option: { body: Methods7['patch']['reqBody'], config?: T }) =>
                  fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, prefix3, PATCH, option).json().then(r => r.body),
                /**
                 * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルを削除します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 */
                delete: (option?: { config?: T }) =>
                  fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                /**
                 * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルを削除します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 */
                $delete: (option?: { config?: T }) =>
                  fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            /**
             * スペース内のコンテンツモデル一覧を取得します。
             *
             * ### 公開範囲
             * | ユーザー公開 | 管理画面 |
             * |:---:|:---:|
             * | ● | ● |
             * @returns OK
             */
            get: (option?: { config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * スペース内のコンテンツモデル一覧を取得します。
             *
             * ### 公開範囲
             * | ユーザー公開 | 管理画面 |
             * |:---:|:---:|
             * | ● | ● |
             * @returns OK
             */
            $get: (option?: { config?: T }) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            /**
             * スペース内にコンテンツモデルを作成します。
             *
             * ### 公開範囲
             * | ユーザー公開 | 管理画面 |
             * |:---:|:---:|
             * | ● | ● |
             * @returns Created
             */
            post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
            /**
             * スペース内にコンテンツモデルを作成します。
             *
             * ### 公開範囲
             * | ユーザー公開 | 管理画面 |
             * |:---:|:---:|
             * | ● | ● |
             * @returns Created
             */
            $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
              fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          },
          /**
           * スペースIDに紐づくスペース情報を取得します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | ● | ● |
           * @returns OK
           */
          get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * スペースIDに紐づくスペース情報を取得します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | ● | ● |
           * @returns OK
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * スペースIDに紐づくスペースの情報を更新します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | ● | ● |
           * @returns OK
           */
          patch: (option: { body: Methods2['patch']['reqBody'], config?: T }) =>
            fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * スペースIDに紐づくスペースの情報を更新します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | ● | ● |
           * @returns OK
           */
          $patch: (option: { body: Methods2['patch']['reqBody'], config?: T }) =>
            fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * スペースIDに紐づくスペースを削除します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | ● | ● |
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * スペースIDに紐づくスペースを削除します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | ● | ● |
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * ユーザーに紐づくスペースの一覧を取得します。
       *
       * ### 公開範囲
       * | ユーザー公開 | 管理画面 |
       * |:---:|:---:|
       * | ● | ● |
       *
       * ### ユーザーの特定方法について
       * リクエストヘッダーにのっかってきたTokenからユーザーを特定する予定(出来るかは要調査が必要)
       * 無理ならクエリパラメータにユーザー情報をのせる
       * @returns OK
       */
      get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * ユーザーに紐づくスペースの一覧を取得します。
       *
       * ### 公開範囲
       * | ユーザー公開 | 管理画面 |
       * |:---:|:---:|
       * | ● | ● |
       *
       * ### ユーザーの特定方法について
       * リクエストヘッダーにのっかってきたTokenからユーザーを特定する予定(出来るかは要調査が必要)
       * 無理ならクエリパラメータにユーザー情報をのせる
       * @returns OK
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * スペースを新規作成します。
       *
       * ### 公開範囲
       * | ユーザー公開 | 管理画面 |
       * |:---:|:---:|
       * | ● | ● |
       * @returns Created
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * スペースを新規作成します。
       *
       * ### 公開範囲
       * | ユーザー公開 | 管理画面 |
       * |:---:|:---:|
       * | ● | ● |
       * @returns Created
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    users: {
      _user_id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

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
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json(),
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
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * ユーザーIDに紐づくユーザー情報を更新します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | | ● |
           * @returns OK
           */
          patch: (option: { body: Methods12['patch']['reqBody'], config?: T }) =>
            fetch<Methods12['patch']['resBody'], BasicHeaders, Methods12['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * ユーザーIDに紐づくユーザー情報を更新します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | | ● |
           * @returns OK
           */
          $patch: (option: { body: Methods12['patch']['reqBody'], config?: T }) =>
            fetch<Methods12['patch']['resBody'], BasicHeaders, Methods12['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * ユーザー退会時に呼び出すAPI
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | | ● |
           */
          delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods12['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * ユーザー退会時に呼び出すAPI
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | | ● |
           */
          $delete: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods12['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
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
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH6, GET, option).json(),
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
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      /**
       * サインアップ時に呼び出すAPI
       *
       * ### 公開範囲
       * | ユーザー公開 | 管理画面 |
       * |:---:|:---:|
       * | | ● |
       * @returns Created
       */
      post: (option: { body: Methods11['post']['reqBody'], config?: T }) =>
        fetch<Methods11['post']['resBody'], BasicHeaders, Methods11['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * サインアップ時に呼び出すAPI
       *
       * ### 公開範囲
       * | ユーザー公開 | 管理画面 |
       * |:---:|:---:|
       * | | ● |
       * @returns Created
       */
      $post: (option: { body: Methods11['post']['reqBody'], config?: T }) =>
        fetch<Methods11['post']['resBody'], BasicHeaders, Methods11['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
