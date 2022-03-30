/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * スペース内のコンテンツモデル一覧を取得します。
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
      content_models: Types.ContentModel[]
    }
  }

  /**
   * スペース内にコンテンツモデルを作成します。
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
      content_model: Types.ContentModel
    }

    reqBody: Types.ContentModel
  }
}
