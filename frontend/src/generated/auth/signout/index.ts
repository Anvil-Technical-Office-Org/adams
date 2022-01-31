/* eslint-disable */
export type Methods = {
  /** サインアウトをした際に、Cookieから認証情報を削除します。 */
  delete: {
    status: 200

    resHeaders: {
      /** JWTの削除 */
      'Set-Cookie: access_token': string
      /** 認証フラグの削除 */
      'Set-Cookie: isAuthenticated': string
    }
  }
}
