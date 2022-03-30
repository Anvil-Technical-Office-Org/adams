import { Methods as MethodsSpaces } from '~/generated/spaces'

export interface ISpaceDriver {
  create(id: string, name: string, description?: string): Promise<MethodsSpaces['post']['resBody'] | null>
}
