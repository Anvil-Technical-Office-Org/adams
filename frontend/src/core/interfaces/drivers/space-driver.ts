import { Space } from '~/generated/@types'

export interface ISpaceDriver {
  create(id: string, name: string, description?: string): Promise<Space | null>
}
