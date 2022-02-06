/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  /**
   * コンテンツIDに紐づく、コンテンツの情報を取得します。
   *
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  get: {
    status: 200

    /** OK */
    resBody: {
      id: string
    } & Types.Timestamp
  }

  /**
   * コンテンツIDに紐づく、コンテンツの情報を更新します。
   *
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  patch: {
    status: 200

    /** OK */
    resBody: {
      id: string
    } & Types.Timestamp
  }

  /**
   * コンテンツIDに紐づく、コンテンツを削除します。
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
