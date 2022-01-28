package server

import (
	"backend/controllers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func router() (r *gin.Engine) {
	r = gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		"http://localhost:3000",
	}
	config.AllowCredentials = true
	r.Use(cors.New(config))


	v1 := r.Group("/v1")

	{
		// ルーティングサンプル
		sample := v1.Group("/samples")
		{
			ctrl := controllers.SampleController{}
			sample.GET("", ctrl.Index)
			sample.POST("", ctrl.Create)
		}
	}

	return
}
