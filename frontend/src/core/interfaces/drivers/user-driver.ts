export interface IUserDriver {
  create(email: string, password: string): Promise<CreateUserJSON | null>
}

/** TODO : 本来はAspida等でAPIのレスポンスの型定義を生成しておくべき？ */
/** 後で下記の内容は修正予定 */
export type UserModel = {
  id: string
  email: string
  created_at: string
  created_user_id: string
  updated_at: string
  updated_user_id: string
}

export type CreateUserJSON = {
  user: UserModel
  token: string
}
