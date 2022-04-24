import { Methods as MethodsContentModels } from '~/generated/spaces/_space_id@string/content_models'

export interface IContentModelDriver {
  craete(spaceId: string, id: string, name: string, description?: string): Promise<MethodsContentModels['post']['resBody'] | null>
}
