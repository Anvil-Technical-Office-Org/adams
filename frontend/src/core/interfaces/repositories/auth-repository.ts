import { Auth } from '~/core/entities'

export interface IAuthRepository {
  signup(email: string, password: string): Promise<Auth | null>
  signin(email: string, password: string): Promise<Auth | null>
  signout(): Promise<void>
}
