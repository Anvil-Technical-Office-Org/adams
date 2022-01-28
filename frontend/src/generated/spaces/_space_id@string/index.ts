/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * スペースIDに紐づくスペース情報を取得します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.Space
  }

  /**
   * スペースIDに紐づくスペースの情報を更新します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  patch: {
    status: 200
    /** OK */
    resBody: Types.Space

    reqBody: {
      id?: string
      name?: string
      description?: string
    }
  }

  /**
   * スペースIDに紐づくスペースを削除します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  delete: {
    status: 204
  }
}
