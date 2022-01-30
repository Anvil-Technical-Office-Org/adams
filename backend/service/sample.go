package service

import (
	"backend/db"
	"backend/libs"
	"backend/models"
	"errors"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"gorm.io/gorm"
)

type SampleService struct{}
type Sample models.Sample

func (service SampleService) GetAll() ([]Sample, error) {
	d := db.GetDb()
	var sample []Sample
	if err := d.Table("samples").Select("*").Scan(&sample).Error; err != nil {
		return nil, err
	}
	return sample, nil
}

func (service SampleService) GetByName(name string) (Sample, error) {
	d := db.GetDb()
	var sample Sample
	result := d.First(&sample, "name = ?", name)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return sample, result.Error
	}

	return sample, nil
}

func (service SampleService) GetById(id string) (Sample, error) {
	d := db.GetDb()
	var sample Sample
	result := d.First(&sample, "id = ?", id)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return sample, result.Error
	}

	return sample, nil
}

func (service SampleService) Create(c *gin.Context) (Sample, error) {

	d := db.GetDb()
	var sample Sample
	// BindJSONはリクエストボディーを消費してしまうので、ShouldBindBodyWithメソッドを使用する
	// このメソッドは、パフォーマンスに影響があるので、バインディングが1度きりで良ければBindJSONを使用する
	if err := c.ShouldBindBodyWith(&sample, binding.JSON); err != nil {
		return sample, err
	}
	if err := d.Create(&sample).Error; err != nil {
		return sample, err
	}
	// ShouldBindBodyWithを使えばリクエストボディは消えないかと思いきや、内部の実装を確認したところ
	// そうでもなさそうな感じだったので、以降の処理でリクエストボディを利用できるよう復元してあげる
	libs.RestoreRequestBody(c)
	return sample, nil
}
