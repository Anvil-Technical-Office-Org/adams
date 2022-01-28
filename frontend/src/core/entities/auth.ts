import { User } from './user'
import { parseCookies } from 'nookies'
import { bool, object, string } from 'yup'

export class Auth {
  readonly user: User
  readonly token: string

  constructor (user: User, token: string) {
    this.user = user
    this.token = token
  }

  getAuthTokenCookie (): string | null {
    const cookie = parseCookies()
    return cookie['auth-token'] || null
  }

  /**
   * 認証用フォームのバリデーションスキーマ
   */
  public static validationSchema = object({
    email: string().email('メールアドレス形式で入力してください。').required('メールアドレスは必須項目です。'),
    password: string().min(8, 'パスワードは最低8文字です。').required('パスワードは必須項目です。'), // TODO : パスワードの条件は要検討
    isAgreement: bool().oneOf([true], 'プライバシーポリシーにチェックしてください。'),
  })
}
