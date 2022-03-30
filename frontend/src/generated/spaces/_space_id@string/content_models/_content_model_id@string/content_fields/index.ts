/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /**
   * コンテンツモデル内のコンテンツフィールド一覧を取得します。
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
      content_fields: Types.ContentField[]
    }
  }

  /**
   * コンテンツモデル内に、コンテンツフィールドを新規作成します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  post: {
    status: 201

    /** Created */
    resBody: {
      content_field: Types.ContentField
    }

    reqBody: Types.ContentField
  }
}
