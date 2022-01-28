/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * 当システムを利用している全ユーザーを取得します。
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
    resBody: Types.User[]
  }

  /**
   * サインアップ時に呼び出すAPI
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | | ● |
   */
  post: {
    status: 201

    /** Created */
    resBody: {
      user: Types.User
      token: string
    }

    reqBody: Types.User
  }
}
