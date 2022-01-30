package server

import (
	"backend/controllers"
	"backend/middlewares/auth"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func router() (r *gin.Engine) {
	r = gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		"http://localhost:3000",
	}
	config.AllowHeaders = []string{
		"Content-Type",
		"Authorization",
	}
	config.AllowCredentials = true
	r.Use(cors.New(config))

	v1 := r.Group("/v1")
	{
		sample := v1.Group("/samples")
		{
			ctrl := controllers.SampleController{}
			// 認証不要なエンドポイントを定義
			sample.GET("", ctrl.Index)
			sample.POST("", ctrl.Create)
			sample.GET("/confirm_cookie", ctrl.ConfirmCookie)
			sample.POST("/create_cookie", ctrl.CreateCookie)
			sample.POST("/confirm_request_body", ctrl.ConfirmRequestBody)
			sample.POST("/signup", ctrl.SignupHandler)
			sample.POST("/login", auth.GetMiddleware().LoginHandler)
			sample.GET("/refresh_token", auth.GetMiddleware().RefreshHandler)

			// 認証必須なエンドポイントを定義
			sample.Use(auth.GetMiddleware().MiddlewareFunc())
			sample.DELETE("/logout", auth.GetMiddleware().LogoutHandler)
			sample.GET("/confirm_auth", ctrl.ConfirmAuth)
		}
	}
	return
}
