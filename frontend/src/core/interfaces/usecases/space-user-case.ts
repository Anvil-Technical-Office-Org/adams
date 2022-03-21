import { Space } from '~/core/entities'

export interface ISpaceUseCase {
  create(id: string, name: string, description?: string): Promise<Space | null>
}
