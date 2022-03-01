package service

import (
	"backend/db"
	"backend/models"
	"errors"

	"gorm.io/gorm"
)

// usersマスタのサービス(DAO)

// サービスの実体（構造体）の定義
type UserService struct{}

//  models.Userの別名としてUserを定義する時の書き方
//		だと思ってたんだけど単純に別名扱いされるわけじゃなくて
//		このpackage独自の別型として定義しなおされるみたい。
//		つまり他のパッケージから呼び出され、戻り値で返した物を定義済みの
//		変数に受け取ろうとすると⇒>型違いで怒られる<　
//type User models.User

// レコード全取得
func (_ UserService) GetAll() ([]models.User, error) { 
	// コネクションの取得
	d := db.GetDb()

	// 受け取りモデル定義
	var users []models.User

	// select実行
	if err := d.Table("users").Select("*").Scan(&users).Error; err != nil {
		return nil, err
	}

	return users, nil
}

func (_ UserService) GetById(id string) (models.User, error) {
	d := db.GetDb()
	var user models.User
	result := d.First(&user, "id = ?", id)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return user, result.Error
	}

	return user, nil
}

func (_ UserService) GetByEmail(email string) (models.User, error) {
	d := db.GetDb()
	var user models.User
	result := d.First(&user, "email = ?", email)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return user, result.Error
	}

	return user, nil
}

// アドレスの重複確認
func (_ UserService) IsDuplicateEmail(email string) (bool, error) {
	var result bool = true

	d := db.GetDb()
	var count int64
	d.Model(&models.User{}).Where("email = ?", email).Count(&count)

	// 同じアドレスが一つ以上ある場合はエラー
	if(count > 0){
		result = false
	}
	
	// エラーハンドリングは一旦また今度
	return result, nil
}

// INSERT
// sampleの場合requestのcontextを直で取得しているが、
// 基本的に一度整形(logic側)を噛ます必要がある為、その整形後のUser構造体を受け取る
func (this UserService) Create(model models.User) (models.User ,error) {
	var result models.User
	d := db.GetDb()

	// insert実行
	if err := d.Create(&model).Error; err != nil {
		return result ,err
	}

	result, _ = this.GetByEmail(model.Email)

	return result, nil
}


// UPDATE
func (_ UserService) Update(model models.User) ( error) {
	d := db.GetDb()

	// update実行
	//		渡されたモデルに対し、Saveメソッドを実行することで、
	//		キー項目に紐づくレコードの全カラムを更新するUPDATE文が発行される。
	//		ただし、ORマッパーあるあるで中のデータが空のままのカラムも更新対象になる為、
	//		空のカラムは空で更新されてしまう。事前にSELECTしてからupdate推奨
	if err := d.Save(&model).Error; err != nil {
		return  err
	}
	//	UPDATE users SET Email='models.UserのEmail'	,Password='models.UserのPassword'
	//					, updated_at = '現在日付' WHERE user_id=111; 

	return  nil
}

// UPDATE(単項目)
func (_ UserService) UpdatePassword(id string,password string) ( error) {
	d := db.GetDb()

	// update実行
	if err := d.Model(&models.User{}).Where("user_id = ?",id).Update("password",password).Error; err != nil {
		return  err
	}
	//	UPDATE users SET Password='models.UserのPassword' WHERE user_id=111; 

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
