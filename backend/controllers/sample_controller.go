package controllers

import (
	"backend/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

type SampleController struct{}

func (ctrl SampleController) Index(c *gin.Context) {
	var sample service.SampleService
	res, err := sample.GetAll()
	if err != nil {
		c.AbortWithStatus(404)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		// 返却値を変更したいときはここを修正する
		c.JSON(200, res)
	}
}

func (ctrl SampleController) Create(c *gin.Context) {
	var sample service.SampleService
	res, err := sample.Create(c)
	if err != nil {
		c.AbortWithStatus(400)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		c.JSON(200, res)
	}
}
