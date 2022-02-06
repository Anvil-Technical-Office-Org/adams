export class System {
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(createdAt: Date, updatedAt: Date) {
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  // TODO : 日付変換処理
}
