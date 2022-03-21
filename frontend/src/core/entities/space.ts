import { System } from './system'
import { string, object } from 'yup'

export class Space {
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

  public static validationSchema = object({
    id: string()
      .required('スペースIDは必須項目です。'),
    name: string()
      .required('スペース名は必須項目です。'),
    description: string().
      max(255, '説明文は最大255文字までです。')
  })
}
