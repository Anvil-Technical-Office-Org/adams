import { ContentModel } from '~/core/entities'

export interface IContentModelRepository {
  create(spaceId: string, id: string, name: string, description?: string): Promise<ContentModel | null>
}
