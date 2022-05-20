package space

import (

)

// 

// スペース作成時のフォーム定義
//	ユーザ情報の返却フォーム
type RequestForm struct {
	Id        string `json:"id" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Description  string `json:"description" binding:"required"`
	// O
	CreatedAt string `json:"created_at" binding:"required"`
	UpdatedAt  string `json:"updated_at" binding:"required"`
}




