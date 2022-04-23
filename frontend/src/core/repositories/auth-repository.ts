import { Auth, User } from '~/core/entities'
import { IAuthRepository } from '~/core/interfaces/repositories'
import { IAuthDriver } from '~/core/interfaces/drivers'
import { User as UserModel } from '~/generated/@types'
import { convertSystem } from '~/utilities/convert'

export default class AuthRepository implements IAuthRepository {
  private readonly driver: IAuthDriver

  constructor(driver: IAuthDriver) {
    this.driver = driver
  }

  async signup(email: string, password: string): Promise<Auth | null> {
    const res = await this.driver.signup(email, password)
    if (!res) return null
    if (!res.user.id) return null

    const user = new User(res.user.id, res.user.email, convertSystem<UserModel>(res.user))
    return new Auth(user)
  }

  async signin(email: string, password: string): Promise<Auth | null> {
    const res = await this.driver.signin(email, password)
    if (!res) return null
    if (!res.user.id) return null
    const user = new User(res.user.id, res.user.email, convertSystem<UserModel>(res.user))
    return new Auth(user)
  }

  async signout(): Promise<void> {
    await this.driver.signout()
  }
}
