package models

import "github.com/google/uuid"

// ユーザマスタ users
// パスワードは暗号化したいが、postgresに暗号型は無い為、INSERT、SELECTでそれぞれでエンコード、デコードする。
type User struct { // データ型や定義は タグ(``)で記述。データ型は typeに合った物を使用する。typeはPostGresの型定義と一致する。
	User_id  uuid.UUID `gorm:"primaryKey; type:uuid; default:uuid_generate_v4()"`
	Email    string    `gorm:"unique; not null; type:varchar(255)"`
	Password string    `gorm:"type:varchar(30);not null"`
	Timestamp
}
