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
}
