package models

import (
	"github.com/google/uuid"
)

// サンプルを表すモデル
type Sample struct {
	ID   uuid.UUID `gorm:"primaryKey; type:uuid; default:uuid_generate_v4()"`
	Name string    `gorm:"not null;"`
	Password string ``
	Timestamp
}
