import { client } from '~/libs/axios'
import { IContentModelDriver } from '~/core/interfaces/drivers'
import { Methods as MethodsContentModels } from '~/generated/spaces/_space_id@string/content_models'
import { ContentModel } from '~/generated/@types'

export default class ContentModelDriver implements IContentModelDriver {
  async craete(spaceId: string, id: string, name: string, description?: string): Promise<MethodsContentModels['post']['resBody'] | null> {
    try {
      const res = await client.spaces._space_id(spaceId).content_models.$post({
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
}
