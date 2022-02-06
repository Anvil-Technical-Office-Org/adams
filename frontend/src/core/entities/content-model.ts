import { System } from './system'

export class ContentModel {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly sys: System

  constructor(id: string, name: string, description: string, sys: System) {
    this.id = id
    this.name = name
    this.description = description
    this.sys = sys
  }
}
