package logic

import (
	"backend/forms/space"
	"backend/service"
	"backend/models"
	"errors"

	"gorm.io/gorm"
)

// usersマスタのサービス(DAO)

// サービスの実体（構造体）の定義
type SpaceLogic struct{}

// レコード全取得
func (_ SpaceLogic) GetAll() ([]space.ResponseForm, error) { 
	var results []space.ResponseForm

	var service service.SpaceService

	users, err :=  service.GetAll()

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return results, err
	} else {
		for _, v := range users {
			var rec space.ResponseForm
			
			rec = space.NewSpaceForm(v)

			results = append(results,space.ResponseForm(rec))
		}
	}
	return results, nil
}

// ID取得
func (_ SpaceLogic) GetById(form space.RequestForm) (space.ResponseForm, error) {

	var service service.SpaceService
	var result space.ResponseForm

	model,err:= service.GetById(form.Id)

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return result, err
	} else {
		result = space.NewSpaceForm(model)

	}

	return result, nil
}

// UPDATE
func (_ SpaceLogic) Update(form space.RequestForm) (space.ResponseForm, error) {
	var service service.SpaceService

	var model models.Space
	var result space.ResponseForm

	model.Space_id = form.Id
	model.Space_name = form.Name
	model.Description = form.Description
 
	service.Update(model)

	model,err:= service.GetById(form.Id)

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return result, err
	} else {
		result = space.NewSpaceForm(model)

	}
	
	return  result,nil
}

// Create
func (_ SpaceLogic) Create(form space.RequestForm) (space.ResponseForm, error) {
	var service service.SpaceService
 
	var model models.Space
	var result space.ResponseForm

	model.Space_id = form.Id
	model.Space_name = form.Name
	model.Description = form.Description
 
	service.Create(model)

	model,err:= service.GetById(form.Id)

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return result, err
	} else {
		result = space.NewSpaceForm(model)

	}
	
	return  result,nil
}

// Create
func (_ SpaceLogic) Delete(form space.RequestForm) (error) {
	var service service.SpaceService
 
	var model models.Space


	model.Space_id = form.Id
	model.Space_name = form.Name
	model.Description = form.Description
 
	err:= service.Delete(model)

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return err
	}
	
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
