/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /**
   * コンテンツモデル内にコンテンツフィールドを一括作成します。
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
      content_fields?: Types.ContentField[]
    }

    reqBody: Types.ContentField
  }
}
