package models

import "github.com/google/uuid"

// スペース spaces
type Space struct { // データ型や定義は タグ(``)で記述。データ型は typeに合った物を使用する。typeはPostGresの型定義と一致する。
	Space_key uuid.UUID `gorm:"primaryKey; type:uuid; default:uuid_generate_v4()"`
	Space_id  string    `gorm:"unique; not null; type:varchar(50)"`
	Space_name string 	`gorm:"not null; type:varchar(100)"`
	Description string 	`gorm:"not null; type:varchar(255)"`
	Timestamp
}
