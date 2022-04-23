import { ISpaceUseCase } from '~/core/interfaces/usecases'
import { ISpaceRepository } from '~/core/interfaces/repositories'
import { Space } from '~/core/entities'

export default class SpaceUseCase implements ISpaceUseCase {
  readonly repository: ISpaceRepository

  constructor(repository: ISpaceRepository) {
    this.repository = repository
  }

  async create(id: string, name: string, description?: string): Promise<Space | null> {
    return await this.repository.create(id, name, description)
  }

  async getSpaces(): Promise<Space[] | null> {
    return await this.repository.getSpaces()
  }
}
