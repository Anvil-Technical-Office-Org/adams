import { Space } from '~/core/entities'
import { ISpaceRepository } from '~/core/interfaces/repositories'
import { ISpaceDriver } from '~/core/interfaces/drivers'
import { Space as SpaceModel } from '~/generated/@types'
import { convertSystem } from '~/utilities/convert'

export default class SpaceRepository implements ISpaceRepository {
  private readonly driver: ISpaceDriver

  constructor(driver: ISpaceDriver) {
    this.driver = driver
  }

  async create(id: string, name: string, description?: string): Promise<Space | null> {
    const res = await this.driver.create(id, name, description)
    if (!res) return null
    // TODO : descriptionの渡し方もっといい感じにしたい
    return new Space(res.space.id, res.space.name, res.space.description || '', convertSystem<SpaceModel>(res.space))
  }

  async getSpaces(): Promise<Space[] | null> {
    const res = await this.driver.getSpaces()
    if (!res) return null
    const spaces = new Array<Space>()
    for (const space of res.spaces) {
      spaces.push(new Space(
        space.id,
        space.name,
        space.description || '',
        convertSystem<SpaceModel>(space)
      ))
    }
    return spaces
  }
}
