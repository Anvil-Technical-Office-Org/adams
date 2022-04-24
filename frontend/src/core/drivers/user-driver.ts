import {
  IUserDriver,
  CreateUserJSON,
} from '~/core/interfaces/drivers/user-driver'
import axios, { client } from '~/libs/axios'

export default class UserDriver implements IUserDriver {
  async create(
    email: string,
    password: string
  ): Promise<CreateUserJSON | null> {
    /**
     * TODO
     *  - 本来のエンドポイントに設定
     *  - Axiosを使用
     *  - useSWRを絡める
     *  - Mockに繋げるかどうか判定する仕組みを用意する
     */
    return null
  }
}
