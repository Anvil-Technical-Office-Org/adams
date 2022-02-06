/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * ユーザーに紐づくスペースの一覧を取得します。
   *
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   *
   * ### ユーザーの特定方法について
   * リクエストヘッダーにのっかってきたTokenからユーザーを特定する予定(出来るかは要調査が必要)
   * 無理ならクエリパラメータにユーザー情報をのせる
   */
  get: {
    status: 200
    /** OK */
    resBody: Types.Space[]
  }

  /**
   * スペースを新規作成します。
   *
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  post: {
    status: 201
    /** Created */
    resBody: Types.Space
    reqBody: Types.Space
  }
}
