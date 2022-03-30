/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * ユーザーIDに紐づくユーザー情報を取得します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | | |
   * 
   * > 今のところ使用予定なし
   */
  get: {
    status: 200

    /** OK */
    resBody: {
      user: Types.User
    }
  }

  /**
   * ユーザーIDに紐づくユーザー情報を更新します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | | ● |
   */
  patch: {
    status: 200

    /** OK */
    resBody: {
      user: Types.User
    }

    reqBody: {
      email?: string
      password?: string
    }
  }

  /**
   * ユーザー退会時に呼び出すAPI。成功時は、Cookieの情報も一緒に削除する。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | | ● |
   */
  delete: {
    status: 204
  }
}
