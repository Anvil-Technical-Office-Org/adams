import { Methods as MethodsSignup } from '~/generated/auth/signup'
import { Methods as MethodsSignin } from '~/generated/auth/signin'

export interface IAuthDriver {
  signup(email: string, password: string): Promise<MethodsSignup['post']['resBody'] | null>
  signin(email: string, password: string): Promise<MethodsSignin['post']['resBody'] | null>
  signout(): Promise<void>
}
