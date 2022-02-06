import { System } from './system'

export class ContentField {
  readonly id: string
  readonly name: string
  readonly type: number
  readonly description: string
  readonly order_number: number
  readonly isRequired: boolean
  readonly isUnique: boolean
  readonly regex: string
  readonly max: number
  readonly min: number
  readonly unit_name: string
  readonly sys: System

  constructor(
    id: string,
    name: string,
    type: number,
    description: string,
    order_number: number,
    isRequired: boolean,
    isUnique: boolean,
    regex: string,
    max: number,
    min: number,
    unit_name: string,
    sys: System
  ) {
    this.id = id
    this.name = name
    this.type = type
    this.description = description
    this.order_number = order_number
    this.isRequired = isRequired
    this.isUnique = isUnique
    this.regex = regex
    this.max = max
    this.min = min
    this.unit_name = unit_name
    this.sys = sys
  }
}
