import { IAuthUseCase } from '~/core/interfaces/usecases/auth-use-case'
import { IAuthRepository } from '~/core/interfaces/repositories/auth-repository'
import { Auth } from '~/core/entities'
import { setCookie } from 'nookies'

export default class AuthUseCase implements IAuthUseCase {
  readonly authRepository: IAuthRepository

  constructor(repository: IAuthRepository) {
    this.authRepository = repository
  }

  async signup(email: string, password: string): Promise<Auth | null> {
    return await this.authRepository.signup(email, password)
  }

  async signin(email: string, password: string): Promise<Auth | null> {
    return await this.authRepository.signin(email, password)
  }

  async signout(): Promise<void> {
    await this.authRepository.signout()
  }
}
