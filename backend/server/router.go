package server

import (
	"backend/controllers"
	"backend/middlewares/auth_cookie"
	"fmt"

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
			sample.POST("/login", auth_cookie.GetMiddleware().LoginHandler)
			sample.GET("/refresh_token", auth_cookie.GetMiddleware().RefreshHandler)

			// 認証必須なエンドポイントを定義
			sample.Use(auth_cookie.GetMiddleware().MiddlewareFunc())
			sample.DELETE("/logout", auth_cookie.GetMiddleware().LogoutHandler)
			sample.GET("/confirm_auth", ctrl.ConfirmAuth)
		}

		// 所為、コントローラー側にルーティングを書けるようにするための部品
		fmt.Println("<コントローラーからエンドポイントを取得してRouting化>")
		// リフレクションとか存在しないので、下記メソッドの中に作ったコントローラーは全部書かないといけない。//構造体言語が悪い
		base := controllers.InitEndPoint()

		//上記までで作ったエンドポイントとルーティングをそれぞれに振り分ける
		for _, ep := range base.EndpointList {
			fmt.Println("Group:" + ep.Endpoint)
			endpoint := v1.Group(ep.Endpoint)

			for _, routs := range ep.Routings {
				switch routs.MethodType {
				case "GET": // 取得
					fmt.Println("GET:" + routs.Endpoint)
					endpoint.GET(routs.Endpoint, routs.Function)

				case "POST": // 登録
					fmt.Println("POST:" + routs.Endpoint)
					endpoint.POST(routs.Endpoint, routs.Function)

				case "PATCH": // 更新
					fmt.Println("PATCH:" + routs.Endpoint)
					endpoint.PATCH(routs.Endpoint, routs.Function)

				case "DELETE": // 削除
					fmt.Println("DELETE:" + routs.Endpoint)
					endpoint.DELETE(routs.Endpoint, routs.Function)

				case "PUT": // なんだっけ？
					fmt.Println("PUT:" + routs.Endpoint)
					endpoint.PUT(routs.Endpoint, routs.Function)

				case "HEAD": // なんだっけ？（GINに定義されてたから持ってきた。
					fmt.Println("HEAD:" + routs.Endpoint)
					endpoint.HEAD(routs.Endpoint, routs.Function)
				}

			}
		}

	}

	return
}
