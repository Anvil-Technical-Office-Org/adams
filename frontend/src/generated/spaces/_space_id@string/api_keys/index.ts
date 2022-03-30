/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * スペース内のAPI Key一覧を取得します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | | ● |
   */
  get: {
    status: 200

    /** OK */
    resBody: {
      api_keys: Types.ApiKey[]
    }
  }

  /**
   * スペース内に新規でAPI Keyを発行します。
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
      api_key: Types.ApiKey
    }

    reqBody: Types.ApiKey
  }
}
