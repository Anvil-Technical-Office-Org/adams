import { Space } from '~/core/entities'

export interface ISpaceRepository {
  create(id: string, name: string, description?: string): Promise<Space | null>
  getSpaces(): Promise<Space[] | null>
}
