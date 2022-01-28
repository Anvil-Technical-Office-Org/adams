import { Auth } from '~/core/entities'

export interface IAuthUseCase {
  signup(email: string, password: string): Promise<Auth | null>
}
