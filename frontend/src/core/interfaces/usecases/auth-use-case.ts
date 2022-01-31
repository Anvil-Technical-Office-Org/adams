import { Auth } from '~/core/entities'

export interface IAuthUseCase {
  signup(email: string, password: string): Promise<Auth | null>
  signin(email: string, password: string): Promise<Auth | null>
  signout(): Promise<void>
}
