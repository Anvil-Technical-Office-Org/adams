/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/signout'
  const DELETE = 'DELETE'

  return {
    /**
     * サインアウトをした際に、Cookieから認証情報を削除します。
     */
    delete: (option?: { config?: T }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send(),
    /**
     * サインアウトをした際に、Cookieから認証情報を削除します。
     */
    $delete: (option?: { config?: T }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
