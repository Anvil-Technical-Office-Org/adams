/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * ユーザー情報を元に認証処理をして、成功したらアクセストークンを発行して返却します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | | ● |
   */
  post: {
    status: 200

    /** OK */
    resBody: {
      user: Types.User
      /** ランダムな文字列 */
      token: string
    }

    reqBody: Types.User
  }
}
