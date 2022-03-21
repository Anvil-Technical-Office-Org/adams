import { IAuthUseCase } from '~/core/interfaces/usecases'
import { IAuthRepository } from '~/core/interfaces/repositories'
import { Auth } from '~/core/entities'
import { setCookie } from 'nookies'

export default class AuthUseCase implements IAuthUseCase {
  readonly repository: IAuthRepository

  constructor(repository: IAuthRepository) {
    this.repository = repository
  }

  async signup(email: string, password: string): Promise<Auth | null> {
    return await this.repository.signup(email, password)
  }

  async signin(email: string, password: string): Promise<Auth | null> {
    return await this.repository.signin(email, password)
  }

  async signout(): Promise<void> {
    await this.repository.signout()
  }
}
