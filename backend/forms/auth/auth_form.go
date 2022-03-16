package auth

import (
	"backend/middlewares/common"
	"backend/models"
)

// レスポンス共通フォーム
//　	共通としたかったがリクエストとレスポンスが
//		両方JSONの為、書き分けが出来ず、空のパスワードが返ってしまったので
//		別持ちとする。
type ResponseForm struct {
	// I/O リクエスト、レスポンス両方で使う物
	Id    string `json:"id"`
	Email string `json:"email"`

	// O レスポンスでのみ使う物
	CreatedAt string `json:"created_at" `
	UpdatedAt string `json:"updated_at" `
}

//	リクエストフォーム
//		サインアップとサインインのリクエストデータが同じだったのが救い
type RequestForm struct {
	// I/O リクエスト、レスポンス両方で使う物
	Email string `json:"email" binding:"required"`
	// I リクエストでのみ使う物
	Password string `json:"password" binding:"required"`
}

// ↑というルールで作ってるけど後で崩れること請け合い。

// ユーザマスタのモデルから変換
func NewAuthForm(model models.User) ResponseForm {

	result := ResponseForm{
		Id:        model.User_id.String(),
		Email:     model.Email,
		CreatedAt: common.TimeToString(model.CreatedAt),
		UpdatedAt: common.TimeToString(model.UpdatedAt),
	}

	return result
}
