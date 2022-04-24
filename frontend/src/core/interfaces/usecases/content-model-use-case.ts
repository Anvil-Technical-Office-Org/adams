import { ContentModel } from '~/core/entities'

export interface IContentModelUseCase {
  create(spaceId: string, id: string, name: string, description?: string): Promise<ContentModel | null>
}
