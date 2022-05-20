package controllers

import (
	"backend/forms/space"
	"backend/logic"
	"backend/middlewares/auth_cookie"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type SpaceController struct{}

// Spaceコントローラー作成
func CreateSpaceController() IController{
	var ctrl SpaceController

	return ctrl
}

// エンドポイント作成
func (ctrl SpaceController)CreateEndpoint() EndpointBase{
	var endpoint EndpointBase
	fmt.Println("spaces")
	endpoint.Endpoint = "/spaces"
	endpoint.AddRoutings("GET","",ctrl.Index)
	endpoint.AddRoutings("GET",":space_id",ctrl.Get)
	endpoint.AddRoutings("POST","",ctrl.Create)
	endpoint.AddRoutings("PATCH","",ctrl.Update)
	endpoint.AddRoutings("DELETE","",ctrl.Delete)

	return endpoint
}

// スペース一覧を取得 gets
// GET http://localhost:8080/v1/spaces/

	// Response
	// {
	// 	"spaces": [
	// 	  {
	// 		"id": "string",
	// 		"name": "string",
	// 		"description": "string",
	// 		"created_at": "1997-07-16T19:20:30.45+01:00",
	// 		"updated_at": "1997-07-16T19:20:30.45+01:00"
	// 	  }
	// 	]
	//   }
func (ctrl SpaceController) Index(c *gin.Context) {
	fmt.Println("================リクエスト発生====================")
	var logic logic.SpaceLogic
	res, err := logic.GetAll()

	if err != nil {
		c.AbortWithStatus(404)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		// ステータスコードを変更するときの例
		// 200
		c.JSON(http.StatusOK, gin.H{"spaces": res})
		// 300
		// c.JSON(http.StatusMultipleChoices, gin.H{"error": "300系のエラーだよ"})
		// 400
		// c.JSON(http.StatusBadRequest, gin.H{"error": "エラーだよー"})
		// 500
		// c.JSON(http.StatusInternalServerError, gin.H{"error": "500系のエラーが発生！"})
	}
}


// スペース情報を取得 get
// GET http://localhost:8080/v1/spaces/{space_id}
 
	// {
	// 	"space": {
	// 	"id": "string",
	// 	"name": "string",
	// 	"description": "string",
	// 	"created_at": "1997-07-16T19:20:30.45+01:00",
	// 	"updated_at": "1997-07-16T19:20:30.45+01:00"
	// 	}
	// 	}
func (ctrl SpaceController) Get(c *gin.Context) {

	fmt.Println("================リクエスト発生====================")
	var form space.RequestForm

	// ShouldBind ⇒コンテキスト破棄されるよ！
	if err := c.ShouldBind(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var logic logic.SpaceLogic
	res, err := logic.GetById(form)

	if err != nil {
		c.AbortWithStatus(404)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		// ステータスコードを変更するときの例
		// 200
		c.JSON(http.StatusOK, gin.H{"spaces": res})
		// 300
		// c.JSON(http.StatusMultipleChoices, gin.H{"error": "300系のエラーだよ"})
		// 400
		// c.JSON(http.StatusBadRequest, gin.H{"error": "エラーだよー"})
		// 500
		// c.JSON(http.StatusInternalServerError, gin.H{"error": "500系のエラーが発生！"})
	}
}


// スペースの作成  create
// POST http://localhost:8080/v1/spaces

	// request
	// {
	// 	"id": "string",
	// 	"name": "string",
	// 	"description": "string"
	//   }

	// response
	// {
	// 	"space": {
	// 	"id": "string",
	// 	"name": "string",
	// 	"description": "string",
	// 	"created_at": "1997-07-16T19:20:30.45+01:00",
	// 	"updated_at": "1997-07-16T19:20:30.45+01:00"
	// 	}
	// }

func (ctrl SpaceController) Create(c *gin.Context) {
	fmt.Println("================リクエスト発生====================")

	var form space.RequestForm

	// ShouldBind ⇒コンテキスト破棄されるよ！
	if err := c.ShouldBind(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var logic logic.SpaceLogic
	res, err := logic.Create(form) 

	if err != nil {
		c.AbortWithStatus(404)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		// CORS
		//c.SetSameSite(http.SameSiteStrictMode)

		// maxAge := 10
		// domain := "localhost"
		// secure := false
		// httpOnly := true

		// // // クッキー作る奴　これやっとけば返る
		// c.SetCookie("cookie_test", "sample_cookie_value", maxAge, "/", domain, secure, httpOnly)
		// Cookie ログイン認証
		auth_cookie.GetMiddleware().LoginHandler(c)

		c.JSON(http.StatusOK, gin.H{"spaces": res})

	}

	// defer func() {
	// 	if e := recover(); e != nil {

	// 	}
	// }()

}

// スペース情報の更新 Update
// PATCH http://localhost:8080/v1/spaces/{space_id}

	// request
	// {
	// 	"id": "example-space",
	// 	"name": "Example Space",
	// 	"description": "スペースの説明文を記載"
	// 	}

	// response
	// {
	// 	"space": {
	// 	"id": "string",
	// 	"name": "string",
	// 	"description": "string",
	// 	"created_at": "1997-07-16T19:20:30.45+01:00",
	// 	"updated_at": "1997-07-16T19:20:30.45+01:00"
	// 	}
	// 	}

func (ctrl SpaceController) Update(c *gin.Context) {

	fmt.Println("================リクエスト発生====================")

	var form space.RequestForm

	// ShouldBind ⇒コンテキスト破棄されるよ！
	if err := c.ShouldBind(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var logic logic.SpaceLogic
	 resultForm, err := logic.Update(form)

	if err != nil {
		c.AbortWithStatus(500)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}else{
		// ステータスコードを変更するときの例

		// CORS
		c.SetSameSite(http.SameSiteStrictMode)
		// Cookie ログイン認証
		auth_cookie.GetMiddleware().LoginHandler(c)

		// maxAge := 10
		// domain := "localhost"
		// secure := false
		// httpOnly := true
		// // クッキー作る奴　これやっとけば返る
		// c.SetCookie("cookie_test", "sample_cookie_value", maxAge, "/", domain, secure, httpOnly)
		// 200
		c.JSON(http.StatusOK, resultForm)
	//  ログインチェック
	}
}

// スペースの削除 delete
// DELETE http://localhost:8080/v1/spaces/{space_id}
func (ctrl SpaceController) Delete(c *gin.Context) {

	fmt.Println("================リクエスト発生====================")

	var form space.RequestForm

	// ShouldBind ⇒コンテキスト破棄されるよ！
	if err := c.ShouldBind(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var logic logic.SpaceLogic
	err := logic.Delete(form)

	if err != nil {
		c.AbortWithStatus(500)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
		// ステータスコードを変更するときの例

		// CORS
		c.SetSameSite(http.SameSiteStrictMode)
		// Cookie ログイン認証
		auth_cookie.GetMiddleware().LoginHandler(c)

		c.JSON(http.StatusOK, nil)

}

