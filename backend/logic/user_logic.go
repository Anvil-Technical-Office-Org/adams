package logic

import (
	"backend/forms/user"
	"backend/service"
	"errors"

	"gorm.io/gorm"
)

// usersマスタのサービス(DAO)

// サービスの実体（構造体）の定義
type UserLogic struct{}

// レコード全取得
func (_ UserLogic) GetAll() ([]user.UserForm, error) { 
	var results []user.UserForm

	var service service.UserService

	users, err :=  service.GetAll()

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return results, err
	} else {
		for _, v := range users {
			var rec user.UserForm
			
			rec = user.NewUserForm(v)

			results = append(results,rec)
		}
	}
	return results, nil
}

// ID取得
func (_ UserLogic) GetById(form user.UserForm) (user.UserForm, error) {

	var service service.UserService
	var result user.UserForm

	model,err:= service.GetById(form.Id)

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return result, err
	} else {
		
		result = user.NewUserForm(model)

	}

	return result, nil
}

// UPDATE
func (_ UserLogic) Update(form user.UserForm) ( error) {
	var service service.UserService

	service.UpdatePassword(form.Id,form.Password)
	//	UPDATE users SET Email='models.UserのEmail'	,Password='models.UserのPassword'
	//					, updated_at = '現在日付' WHERE user_id=111; 

	return  nil
}

	// //DBデータINSERT処理のサンプル(近々よそに移す)
	// //サービスの呼び出し ※モデル単位にサービス実装要
	// var userServ service.UserService

	// //INSERTデータをモデル構造体に格納。
	// user1 := models.User{
	// 	Email:    "test",
	// 	Password: "test",
	// 	Timestamp: models.Timestamp{CreatedAt: time.Now(),
	// 		UpdatedAt: time.Now()}}

	// //INSERT実行
	// userServ.Create(&user1)

	// //INSERTしたデータの取り出し(全件)
	// //※GetAllメソッドは戻り値が(モデル構造体[], エラーオブジェクト)で定義されているため、
	// //	下記のように戻り値二つが必要
	// users, err2 := userServ.GetAll()

	// //正常終了時はエラーオブジェクトは nil=null になる為、
	// //それを元にエラー、正常の判定を行う。
	// if err2 != nil {
	// 	panic(err2)
	// }

	// println(users[0].Email)
