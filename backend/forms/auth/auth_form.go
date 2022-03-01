package auth

// コントローラーで受け取ったリクエストのパラメータを格納する構造体群
//		数が多くなるのでことうけ合いなので、1ファイルに書いても構わないとする。一旦

// レスポンスのみ使用するフォームには頭にSを付ける
//	ユーザ情報の返却フォーム
type AuthForm struct {
	// I/O
	Id    string `json:"id"`
	Email string `json:"email" binding:"required"`

	// O
	CreatedAt string `json:"created_at" `
	UpdatedAt string `json:"updated_at" `

	// I
	Password string `json:"password" binding:"required"`
}

// func (_ UserForm)New (model models.User){
// 	// 変換
// }
