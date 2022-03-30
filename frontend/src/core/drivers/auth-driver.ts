import { client } from '~/libs/axios'
import { IAuthDriver } from '~/core/interfaces/drivers'
import { Methods as MethodsSignup } from '~/generated/auth/signup'
import { Methods as MethodsSignin } from '~/generated/auth/signin'

/**
 * 認証系のDriver
 * TODO : 例外処理の仕組み構築(一旦はNullを返却する)
 */
export default class AuthDriver implements IAuthDriver {
  async signup(email: string, password: string): Promise<MethodsSignup['post']['resBody'] | null> {
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

  async signin(email: string, password: string): Promise<MethodsSignin['post']['resBody'] | null> {
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
