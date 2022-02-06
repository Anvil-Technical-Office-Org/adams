/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /**
   * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルの情報を取得します。
   *
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.ContentModel
  }

  /**
   * スペース内のコンテンツモデルIDい紐づく、コンテンツモデルの情報を更新します。
   *
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  patch: {
    status: 200
    /** OK */
    resBody: Types.ContentModel

    reqBody: {
      id?: string
      name?: string
      description?: string
    }
  }

  /**
   * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルを削除します。
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
