package logic

import (
	"backend/forms/auth"
	"backend/middlewares/common"
	"backend/models"
	"backend/service"
	"errors"

	"gorm.io/gorm"
)

// usersマスタのサービス(DAO)

// サービスの実体（構造体）の定義
type AuthLogic struct{}

// サインアップ　ユーザ登録
func (_ AuthLogic) Signup(form auth.RequestForm) (auth.ResponseForm, error) { 
	var result auth.ResponseForm
	var service service.UserService
	// 入力チェック
	// 		必須チェック　※フォーム変換時に行われている為不要
	//		アドレス重複チェック

	// 戻り値二つ返せるの思ったより便利じゃない気がしてきた。
	check,_ := service.IsDuplicateEmail(form.Email)

	if !check {
		// 重複エラー
		//　レスポンス内容はまた今度

		//　エラーモデルで返す形式であれば
		//  ここでやるよりもチェック専用メソッド作ってやる方が効率がいい。
		return result, nil
	}

	// ユーザマスタ登録
	//		モデル作成
	var model models.User
	
	// ユーザID、タイムスタンプはPosgre側で自動
	model.Email = form.Email
	model.Password = form.Password
	//		登録処理
	model,err :=  service.Create(model)
	if err != nil {
		return result, err
	}

	// フォーム作成
	//		作成したモデルをフォームに変換

	result = auth.NewAuthForm(model)

	return result, nil
}

// サインイン 
func (_ AuthLogic) Signin(form auth.RequestForm) (bool,auth.ResponseForm, error) {
	var result bool = false
	var service service.UserService
	var resultForm auth.ResponseForm

	// メールアドレスで取得
	model,err:= service.GetByEmail(form.Email)

	// errorRecordNotFound = レコードが見つかりません＝それでいいんだよ
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return result,resultForm, err
	}

	// パスワード認証
	if(model.Password == form.Password){
		// チェック結果OK
		result = true

		resultForm.Id = model.User_id.String()
		resultForm.Email = model.Email
		resultForm.CreatedAt = common.TimeToString(model.CreatedAt)
		resultForm.UpdatedAt = common.TimeToString(model.UpdatedAt)
	}

	// 後々ログイン履歴を書きに行く

	return result,resultForm, nil
}

// ログアウト
func (_ AuthLogic) Logout(form auth.RequestForm) ( error) {

	// ここでやることなくない？⇒履歴は書くかも？

	return  nil
}


