import { client } from '~/libs/axios'
import {
  IAuthDriver,
  AuthResponse,
} from '~/core/interfaces/drivers/auth-driver'

/**
 * 認証系のDriver
 * TODO : 例外処理の仕組み構築(一旦はNullを返却する)
 */
export default class AuthDriver implements IAuthDriver {
  async signup(email: string, password: string): Promise<AuthResponse | null> {
    try {
      const res = await client.auth.signup.$post({
        body: {
          email,
          password,
        },
      })
      return res
    } catch (e) {
      console.log('signup Error:', e)
      return null
    }
  }

  async signin(email: string, password: string): Promise<AuthResponse | null> {
    try {
      const res = await client.auth.signin.$post({
        body: {
          email,
          password,
        },
      })
      return res
    } catch (e) {
      console.log('signin Error:', e)
      return null
    }
  }

  async signout(): Promise<void> {
    try {
      const res = await client.auth.signout.$delete()
    } catch (e) {
      console.log('signout Error:', e)
    }
  }
}
