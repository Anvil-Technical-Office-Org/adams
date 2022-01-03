package server

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func router() (r *gin.Engine) {
	r = gin.Default()

	// ルーティングサンプル
	sample := r.Group("/samples")
	{
		ctrl := controllers.SampleController{}
		sample.GET("", ctrl.Index)
		sample.POST("", ctrl.Create)
	}
	return
}
