/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'
// prettier-ignore
import { Methods as Methods1 } from './_space_id@string'
// prettier-ignore
import { Methods as Methods2 } from './_space_id@string/api_keys'
// prettier-ignore
import { Methods as Methods3 } from './_space_id@string/api_keys/_api_key_id@string'
// prettier-ignore
import { Methods as Methods4 } from './_space_id@string/bulk_content_models'
// prettier-ignore
import { Methods as Methods5 } from './_space_id@string/content_models'
// prettier-ignore
import { Methods as Methods6 } from './_space_id@string/content_models/_content_id@string/content_fields/_content_field_id@string'
// prettier-ignore
import { Methods as Methods7 } from './_space_id@string/content_models/_content_model_id@string'
// prettier-ignore
import { Methods as Methods8 } from './_space_id@string/content_models/_content_model_id@string/bulk_content_fields'
// prettier-ignore
import { Methods as Methods9 } from './_space_id@string/content_models/_content_model_id@string/content_fields'
// prettier-ignore
import { Methods as Methods10 } from './_space_id@string/content_models/_content_model_id@string/contents'
// prettier-ignore
import { Methods as Methods11 } from './_space_id@string/content_models/_content_model_id@string/contents/_content_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/spaces'
  const PATH1 = '/api_keys'
  const PATH2 = '/bulk_content_models'
  const PATH3 = '/content_models'
  const PATH4 = '/content_fields'
  const PATH5 = '/bulk_content_fields'
  const PATH6 = '/contents'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _space_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        api_keys: {
          _api_key_id: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`

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
                fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix2, DELETE, option).send(),
              /**
               * スペース内で発行したAPI Keyを削除します。
               *
               * ### 公開範囲
               * | ユーザー公開 | 管理画面 |
               * |:---:|:---:|
               * | | ● |
               */
              $delete: (option?: { config?: T }) =>
                fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
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
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
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
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * スペース内に新規でAPI Keyを発行します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | | ● |
           * @returns Created
           */
          post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * スペース内に新規でAPI Keyを発行します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | | ● |
           * @returns Created
           */
          $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        bulk_content_models: {
          /**
           * スペース内にコンテンツモデルとコンテンツフィールドを一括作成します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | ● | ● |
           * @returns Created
           */
          post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          /**
           * スペース内にコンテンツモデルとコンテンツフィールドを一括作成します。
           *
           * ### 公開範囲
           * | ユーザー公開 | 管理画面 |
           * |:---:|:---:|
           * | ● | ● |
           * @returns Created
           */
          $post: (option: { body: Methods4['post']['reqBody'], config?: T }) =>
            fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        content_models: {
          _content_id: (val2: string) => {
            const prefix2 = `${prefix0}${PATH3}/${val2}`

            return {
              content_fields: {
                _content_field_id: (val4: string) => {
                  const prefix4 = `${prefix2}${PATH4}/${val4}`

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
                      fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix4, GET, option).json(),
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
                      fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
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
                      fetch<Methods6['patch']['resBody'], BasicHeaders, Methods6['patch']['status']>(prefix, prefix4, PATCH, option).json(),
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
                      fetch<Methods6['patch']['resBody'], BasicHeaders, Methods6['patch']['status']>(prefix, prefix4, PATCH, option).json().then(r => r.body),
                    /**
                     * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドを削除します。
                     *
                     * ### 公開範囲
                     * | ユーザー公開 | 管理画面 |
                     * |:---:|:---:|
                     * | ● | ● |
                     */
                    delete: (option?: { config?: T }) =>
                      fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                    /**
                     * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドを削除します。
                     *
                     * ### 公開範囲
                     * | ユーザー公開 | 管理画面 |
                     * |:---:|:---:|
                     * | ● | ● |
                     */
                    $delete: (option?: { config?: T }) =>
                      fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                    $path: () => `${prefix}${prefix4}`
                  }
                }
              }
            }
          },
          _content_model_id: (val2: string) => {
            const prefix2 = `${prefix0}${PATH3}/${val2}`

            return {
              bulk_content_fields: {
                /**
                 * コンテンツモデル内にコンテンツフィールドを一括作成します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns Created
                 */
                post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                  fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option).json(),
                /**
                 * コンテンツモデル内にコンテンツフィールドを一括作成します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns Created
                 */
                $post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
                  fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix2}${PATH5}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH5}`
              },
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
                  fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix2}${PATH4}`, GET, option).json(),
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
                  fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix2}${PATH4}`, GET, option).json().then(r => r.body),
                /**
                 * コンテンツモデル内に、コンテンツフィールドを新規作成します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns Created
                 */
                post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
                  fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option).json(),
                /**
                 * コンテンツモデル内に、コンテンツフィールドを新規作成します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns Created
                 */
                $post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
                  fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix2}${PATH4}`, POST, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix2}${PATH4}`
              },
              contents: {
                _content_id: (val4: string) => {
                  const prefix4 = `${prefix2}${PATH6}/${val4}`

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
                      fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix4, GET, option).json(),
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
                      fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
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
                      fetch<Methods11['patch']['resBody'], BasicHeaders, Methods11['patch']['status']>(prefix, prefix4, PATCH, option).json(),
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
                      fetch<Methods11['patch']['resBody'], BasicHeaders, Methods11['patch']['status']>(prefix, prefix4, PATCH, option).json().then(r => r.body),
                    /**
                     * コンテンツIDに紐づく、コンテンツを削除します。
                     *
                     * ### 公開範囲
                     * | ユーザー公開 | 管理画面 |
                     * |:---:|:---:|
                     * | ● | ● |
                     */
                    delete: (option?: { config?: T }) =>
                      fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                    /**
                     * コンテンツIDに紐づく、コンテンツを削除します。
                     *
                     * ### 公開範囲
                     * | ユーザー公開 | 管理画面 |
                     * |:---:|:---:|
                     * | ● | ● |
                     */
                    $delete: (option?: { config?: T }) =>
                      fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                    $path: () => `${prefix}${prefix4}`
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
                get: (option: { query: Methods10['get']['query'], config?: T }) =>
                  fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix2}${PATH6}`, GET, option).json(),
                /**
                 * スペースのコンテンツモデルIDに紐づく、コンテンツ一覧を取得します。
                 *
                 * ### 公開範囲
                 * | ユーザー公開 | 管理画面 |
                 * |:---:|:---:|
                 * | ● | ● |
                 * @returns OK
                 */
                $get: (option: { query: Methods10['get']['query'], config?: T }) =>
                  fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix2}${PATH6}`, GET, option).json().then(r => r.body),
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
                post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
                  fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix2}${PATH6}`, POST, option).json(),
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
                $post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
                  fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix2}${PATH6}`, POST, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods10['get']['query'] }) =>
                  `${prefix}${prefix2}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
                fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix2, GET, option).json(),
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
                fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
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
                fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, prefix2, PATCH, option).json(),
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
                fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, prefix2, PATCH, option).json().then(r => r.body),
              /**
               * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルを削除します。
               *
               * ### 公開範囲
               * | ユーザー公開 | 管理画面 |
               * |:---:|:---:|
               * | ● | ● |
               */
              delete: (option?: { config?: T }) =>
                fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix2, DELETE, option).send(),
              /**
               * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルを削除します。
               *
               * ### 公開範囲
               * | ユーザー公開 | 管理画面 |
               * |:---:|:---:|
               * | ● | ● |
               */
              $delete: (option?: { config?: T }) =>
                fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
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
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
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
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
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
            fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json(),
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
            fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`
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
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
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
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * スペースIDに紐づくスペースの情報を更新します。
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | ● | ● |
         * @returns OK
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * スペースIDに紐づくスペースの情報を更新します。
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | ● | ● |
         * @returns OK
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        /**
         * スペースIDに紐づくスペースを削除します。
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | ● | ● |
         */
        delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * スペースIDに紐づくスペースを削除します。
         *
         * ### 公開範囲
         * | ユーザー公開 | 管理画面 |
         * |:---:|:---:|
         * | ● | ● |
         */
        $delete: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
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
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
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
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * スペースを新規作成します。
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | ● | ● |
     * @returns Created
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * スペースを新規作成します。
     *
     * ### 公開範囲
     * | ユーザー公開 | 管理画面 |
     * |:---:|:---:|
     * | ● | ● |
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
