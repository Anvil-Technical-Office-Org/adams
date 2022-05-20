package space

import (
	"backend/models"
	"backend/middlewares/common"
)

// コントローラーで受け取ったリクエストのパラメータを格納する構造体群
//		数が多くなるのでことうけ合いなので、1ファイルに書いても構わないとする。一旦

// スペース作成時のフォーム定義
//	ユーザ情報の返却フォーム
type ResponseForm struct {
	Id        string `json:"id" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Description  string `json:"description" binding:"required"`
	CreatedAt string `json:"created_at" binding:"required"`
	UpdatedAt  string `json:"updated_at" binding:"required"`
}
	// {
	// 	"space": {
	// 	"id": "string",
	// 	"name": "string",
	// 	"description": "string",
	// 	"created_at": "1997-07-16T19:20:30.45+01:00",
	// 	"updated_at": "1997-07-16T19:20:30.45+01:00"
	// 	}
// ユーザマスタのモデルから変換 
//		コンストラクタとの事だが中の書きっぷりはどう見てもコンストラクタじゃないな！
func NewSpaceForm (model models.Space) ResponseForm{

	result := ResponseForm{
			Id:     model.Space_id,
			Name:    model.Space_name,
			Description: model.Description,
			CreatedAt: common.TimeToString(model.CreatedAt),
			UpdatedAt: common.TimeToString(model.UpdatedAt),
		}

	return result
}



