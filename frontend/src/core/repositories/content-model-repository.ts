import { ContentModel } from '~/core/entities'
import { IContentModelRepository } from '~/core/interfaces/repositories'
import { IContentModelDriver } from '~/core/interfaces/drivers'
import { ContentModel as APIContentModel} from '~/generated/@types'
import { convertSystem } from '~/utilities/convert'

export default class ContentModelRepository implements IContentModelRepository {
  private readonly driver: IContentModelDriver

  constructor(driver: IContentModelDriver) {
    this.driver = driver
  }

  async create(spaceId: string, id: string, name: string, description?: string): Promise<ContentModel | null> {
    const res = await this.driver.craete(spaceId, id, name, description)
    if (!res) return null
    return new ContentModel(res.content_model.id, res.content_model.name, res.content_model.description || '', convertSystem<APIContentModel>(res.content_model))
  }
}
