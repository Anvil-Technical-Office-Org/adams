/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /**
   * スペースのコンテンツモデルIDに紐づく、コンテンツ一覧を取得します。
   * 
   * ### 公開範囲
   * | ユーザー公開 | 管理画面 |
   * |:---:|:---:|
   * | ● | ● |
   */
  get: {
    query: {
      /** 取得件数 */
      limit: number
      /** 何件目から取得するか */
      skip: number
      /** 取得するコンテンツの並び順 */
      orders: string
    }

    status: 200

    /** OK */
    resBody: {
      /** コンテンツの総数 */
      total: number
      /** 取得件数 */
      limit: number
      /** 何件目から取得されたか */
      skip: number
      items: ({
        id?: string
      } & Types.Timestamp)[]
    }
  }

  /**
   * スペース内のコンテンツモデルIDに紐づく、コンテンツモデルにコンテンツを新規作成します。
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
      id: string
    } & Types.Timestamp

    /** リクエストボディは、ユーザーが任意で設定したコンテンツフィールドによるためここでは定義しない */
    reqBody: {
    }
  }
}
