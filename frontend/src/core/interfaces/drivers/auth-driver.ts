import { User } from '~/generated/@types'

export type AuthResponse = {
  user: User
  token: string
}

export interface IAuthDriver {
  signup(email: string, password: string): Promise<AuthResponse | null>
  signin(email: string, password: string): Promise<AuthResponse | null>
  signout(): Promise<void>
}
