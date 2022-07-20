/* eslint-disable */
export type User_id = {
  /** システム内の一意のユーザーID */
  user_id: string
}

export type Space_id = {
  /** システム内の一意のスペースID */
  space_id: string
}

export type Content_model_id = {
  /** スペース内の一意のコンテンツモデルID */
  content_model_id: string
}

export type Content_field_id = {
  /** コンテンツモデル内の一意のコンテンツフィールドID */
  content_field_id: string
}

export type Content_id = {
  /** コンテンツモデル内の一意のコンテンツID */
  content_id: string
}

export type Api_key_id = {
  /** スペース内の一意のAPI Key ID */
  api_key_id: string
}

/** 当システム利用者のユーザーを表すモデルです。 */
export type User = {
  /** システム内の一意のユーザーID */
  id?: string
  email: string
  password: string
} & Timestamp

/** 各モデル共通の日付を表すモデルです。 */
export type Timestamp = {
  created_at?: string
  updated_at?: string
}

/** スペースを表すモデルです。 */
export type Space = {
  /** システム内で一意のスペースID */
  id: string
  /** 管理画面上での表示名 */
  name: string
  description?: string
} & Timestamp

/** ロールを表すモデルです。 */
export type Role = {
  /** 当システム内で一意のロールID */
  id: number
  /** ロールタイプを表す */
  permission: number
} & Timestamp

/** コンテンツモデルを表すモデルです。 */
export type ContentModel = {
  /** スペース内で一意のコンテンツモデルID */
  id: string
  /** 管理画面上での表示名 */
  name: string
  description?: string
} & Timestamp

/** コンテンツフィールドを表すモデルです。 */
export type ContentField = {
  /** コンテンツモデル内の一意のコンテンツフィールドID */
  id: string
  /** 管理画面上での表示名 */
  name: string
  /**
   * フィールドの入力タイプを表す。
   * 
   * | 形式 | 対応種別 |
   * | --- | --- |
   * | テキスト| 0 |
   * | テキストエリア | 1 |
   * | リッチテキスト | 2 |
   * | 数値 | 3 |
   * | 画像 | 4 |
   */
  type: 0 | 1 | 2
  description?: string
  /** 必須入力フラグ */
  required?: boolean
  /** 重複可否 */
  unique?: boolean
  /** 正規表現でのバリデーション項目 */
  regex?: string
  /** 最大入力値 */
  max?: number
  /** 最小入力値 */
  min?: number
} & Timestamp

/** API Keyの情報を表すモデルです。 */
export type ApiKey = {
  id?: string
  /**
   * API Keyのタイプ
   * 一度発行したらタイプの変更不可
   * 
   * | タイプ | HTTP Method |
   * |---|---|
   * | 0 | GET |
   * | 1 | POST |
   * | 2 | PUT |
   * | 3 | PATCH |
   * | 4 | DELETE |
   */
  type?: (0 | 1 | 2 | 3 | 4)[]
  key?: string
} & Timestamp
