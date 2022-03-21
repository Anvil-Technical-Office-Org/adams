import { User } from '~/generated/@types'

export type AuthResponse = {
  user: User
}

export interface IAuthDriver {
  signup(email: string, password: string): Promise<AuthResponse | null>
  signin(email: string, password: string): Promise<AuthResponse | null>
  signout(): Promise<void>
}
