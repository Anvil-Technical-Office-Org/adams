import { IContentModelUseCase } from '~/core/interfaces/usecases'
import { IContentModelRepository } from '~/core/interfaces/repositories'
import { ContentModel } from '~/core/entities'

export default class ContentModelUseCase implements IContentModelUseCase {
  readonly repository: IContentModelRepository

  constructor(repository: IContentModelRepository) {
    this.repository = repository
  }

  async create(spaceId: string, id: string, name: string, description?: string): Promise<ContentModel | null> {
    return await this.repository.create(spaceId, id, name, description)
  }
}
