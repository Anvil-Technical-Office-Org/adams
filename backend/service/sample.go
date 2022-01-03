package service

import (
	"backend/db"
	"backend/models"

	"github.com/gin-gonic/gin"
)

type SampleService struct{}
type Sample models.Sample

func (_ SampleService) GetAll() ([]Sample, error) {
	d := db.GetDb()
	var sample []Sample
	if err := d.Table("samples").Select("*").Scan(&sample).Error; err != nil {
		return nil, err
	}
	return sample, nil
}

func (_ SampleService) Create(c *gin.Context) (Sample, error) {
	d := db.GetDb()
	var sample Sample
	if err := c.BindJSON(&sample); err != nil {
		return sample, err
	}
	if err := d.Create(&sample).Error; err != nil {
		return sample, err
	}
	return sample, nil
}
