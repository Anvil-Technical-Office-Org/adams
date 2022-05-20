package service

import (
	"backend/db"
	"backend/models"
	"errors"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

// spacesマスタのサービス(DAO)

// サービスの実体（構造体）の定義
type SpaceService struct{}

// レコード全取得
func (_ SpaceService) GetAll() ([]models.Space, error) { 
	// コネクションの取得
	d := db.GetDb()

	// 受け取りモデル定義
	var spaces []models.Space

	// select実行
	if err := d.Table("spaces").Select("*").Scan(&spaces).Error; err != nil {
		return nil, err
	}

	return spaces, nil
}

// Id取得
func (_ SpaceService) GetById(id string) (models.Space, error) {
	d := db.GetDb()
	var space models.Space
	result := d.First(&space, "space_id = ?", id)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return space, result.Error
	}

	return space, nil
}

// key取得
func (_ SpaceService) GetByKey(key uuid.UUID) (models.Space, error) {
	d := db.GetDb()
	var space models.Space

	result := d.First(&space, "space_key = ?", key)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return space, result.Error
	}

	return space, nil
}


// IDの重複確認
func (_ SpaceService) IsDuplicateSpaceId(Id string) (bool, error) {
	var result bool = true

	d := db.GetDb()
	var count int64
	d.Model(&models.User{}).Where("space_Id = ?", Id).Count(&count)

	// 同じアドレスが一つ以上ある場合はエラー
	if(count > 0){
		result = false
	}
	
	// エラーハンドリングは一旦また今度
	return result, nil
}

// INSERT
func (this SpaceService) Create(model models.Space) (models.Space ,error) {
	var result models.Space
	d := db.GetDb()

	// insert実行
	if err := d.Create(&model).Error; err != nil {
		return result ,err
	}

	result, _ = this.GetById(model.Space_id)

	return result, nil
}


// UPDATE
func (_ SpaceService) Update(model models.Space) ( error) {
	d := db.GetDb()

	// update実行
	if err := d.Save(&model).Error; err != nil {
		return  err
	}


	return  nil
}

// DELETE
func (_ SpaceService) Delete(model models.Space) ( error) {
	d := db.GetDb()

	// Delete実行
	if err := d.Delete(&model).Error; err != nil {
		return  err
	}


	return  nil
}
