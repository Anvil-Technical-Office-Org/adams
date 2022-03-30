/* eslint-disable */
import type * as Types from '../../../../../../@types'

export type Methods = {
  /**
   * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドの情報を取得します。
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
      content_field: Types.ContentField
    }
  }

  /**
   * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドを更新します。
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
      content_field: Types.ContentField
    }

    reqBody: {
      id?: string
      name?: string
      type?: 0 | 1 | 2
      description?: string
    }
  }

  /**
   * コンテンツモデル内のコンテンツフィールドIDに紐づく、コンテンツフィールドを削除します。
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
