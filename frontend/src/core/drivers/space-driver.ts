import { client } from '~/libs/axios'
import { ISpaceDriver } from '~/core/interfaces/drivers'
import { Methods as MethodsSpaces } from '~/generated/spaces'
import { Space } from '~/generated/@types'

export default class SpaceDriver implements ISpaceDriver {
  async create(id: string, name: string, description?: string): Promise<MethodsSpaces['post']['resBody'] | null> {
    try {
      const res = await client.spaces.$post({
        body: {
          id,
          name,
          description
        }
      })
      return res
    } catch (e) {
      return null
    }
  }

  async getSpaces(): Promise<{ spaces: Space[] } | null> {
    try {
      const res = await client.spaces.$get()
      return res
    } catch (e) {
      return null
    }
  }
}
