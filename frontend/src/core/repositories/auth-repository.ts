import { Auth, System, User } from '~/core/entities'
import { IAuthRepository } from '~/core/interfaces/repositories/auth-repository'
import { IAuthDriver } from '~/core/interfaces/drivers/auth-driver'
import { User as UserModel } from '~/generated/@types'

export default class AuthRepository implements IAuthRepository {
  private readonly authDriver: IAuthDriver

  constructor(driver: IAuthDriver) {
    this.authDriver = driver
  }

  async signup(email: string, password: string): Promise<Auth | null> {
    const res = await this.authDriver.signup(email, password)
    if (!res) return null
    if (!res.user.id) return null

    const user = new User(res.user.id, res.user.email, convertSystem(res.user))
    return new Auth(user, res.token)
  }

  async signin(email: string, password: string): Promise<Auth | null> {
    const res = await this.authDriver.signin(email, password)
    if (!res) return null
    if (!res.user.id) return null
    const user = new User(res.user.id, res.user.email, convertSystem(res.user))
    return new Auth(user, res.token)
  }

  async signout(): Promise<void> {
    await this.authDriver.signout()
  }
}

const convertSystem = (user: UserModel): System => {
  const created_at = new Date(user.created_at || '')
  const updated_at = new Date(user.updated_at || '')
  return new System(created_at, updated_at)
}
