import { System } from './system'

export class Role {
  readonly id: number
  readonly type: number
  readonly user_id: string
  readonly sys: System

  constructor (id: number, type: number, user_id: string, sys: System) {
    this.id = id
    this.type = type
    this.user_id = user_id
    this.sys = sys
  }
}
