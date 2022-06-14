/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * ユーザーに紐づくスペースの一覧を取得します。
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
      spaces?: Types.Space[]
    }
  }
}
