/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * ユーザーによって入力された内容を元に、データベースにユーザーを作成し、アクセストークンを発行して返却します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | | ● |
   */
  post: {
    status: 200

    /** 認証成功時のレスポンス */
    resBody: {
      user: Types.User
    }

    resHeaders: {
      /** JWT */
      'Set-Cookie: access_token': string
      /** 認証フラグ */
      'Set-Cookie: isAuthenticated': string
    }

    reqBody: Types.User
  }
}
