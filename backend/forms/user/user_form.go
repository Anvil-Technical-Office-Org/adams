package user

import (
	"backend/models"
	"backend/middlewares/common"
)

// コントローラーで受け取ったリクエストのパラメータを格納する構造体群
//		数が多くなるのでことうけ合いなので、1ファイルに書いても構わないとする。一旦

// レスポンスのみ使用するフォームには頭にSを付ける
//	ユーザ情報の返却フォーム
type UserForm struct {
	// I/O 
	Id        string `url:"id" json:"id" binding:"required"`
	Email     string `json:"email" binding:"required"`

	// O
	CreatedAt string `json:"created_at" binding:"required"`
	UpdatedAt  string `json:"updated_at" binding:"required"`

	// I
	Password  string `json:"password" binding:"required"`
}

// ユーザマスタのモデルから変換 
//		コンストラクタとの事だが中の書きっぷりはどう見てもコンストラクタじゃないな！
func NewUserForm (model models.User) UserForm{

	result := UserForm{
			Id:     model.User_id.String(),
			Email:    model.Email,
			CreatedAt: common.TimeToString(model.CreatedAt),
			UpdatedAt: common.TimeToString(model.UpdatedAt),
		}

	return result
}



