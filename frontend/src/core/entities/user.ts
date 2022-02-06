import { System } from './system'
import { Role } from './role'

export class User {
  readonly id: string
  readonly email: string
  readonly sys: System
  readonly role?: Role

  constructor(id: string, email: string, sys: System, role?: Role) {
    this.id = id
    this.email = email
    this.sys = sys
    this.role = role
  }
}
