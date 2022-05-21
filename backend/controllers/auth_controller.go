package controllers

import (
	"backend/forms/auth"
	"backend/logic"
	"backend/middlewares/auth_cookie"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type AuthController struct{}

// コントローラー作成
func CreateAuthController() IController{
	var ctrl AuthController

	return ctrl
}

// エンドポイント作成
func (ctrl AuthController)CreateEndpoint() EndpointBase{
	var endpoint EndpointBase
	fmt.Println("auth")
	endpoint.Endpoint = "/auth"
	endpoint.AddRoutings("POST","/signin",ctrl.Signin)
	endpoint.AddRoutings("POST","/signup",ctrl.Signup)
	endpoint.AddRoutings("DELETE","/signout",ctrl.Logout)

	return endpoint
}
// サインアップ
func (ctrl AuthController) Signup(c *gin.Context) {
	fmt.Println("================リクエスト発生====================")

	var form auth.RequestForm

	// ShouldBind ⇒コンテキスト破棄されるよ！
	if err := c.ShouldBind(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var logic logic.AuthLogic
	res, err := logic.Signup(form)

	if err != nil {
		c.AbortWithStatus(404)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		// CORS
		c.SetSameSite(http.SameSiteStrictMode)

		// Cookie ログイン認証
		auth_cookie.GetMiddleware().LoginHandler(c)

		c.JSON(http.StatusOK, gin.H{"user": res})

	}

	// defer func() {
	// 	if e := recover(); e != nil {

	// 	}
	// }()

}

// サインイン
func (ctrl AuthController) Signin(c *gin.Context) {

	fmt.Println("================リクエスト発生====================")

	var form auth.RequestForm

	// ShouldBind ⇒コンテキスト破棄されるよ！
	if err := c.ShouldBind(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var logic logic.AuthLogic
	res, resultForm, err := logic.Signin(form)

	if err != nil {
		c.AbortWithStatus(500)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	//  ログインチェック
	if res {
		// ステータスコードを変更するときの例

		// CORS
		c.SetSameSite(http.SameSiteStrictMode)
		// Cookie ログイン認証
		auth_cookie.GetMiddleware().LoginHandler(c)
		// 200
		c.JSON(http.StatusOK, gin.H{"user": resultForm} )
	} else {
		// 認証失敗
		c.AbortWithStatus(401)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}

// パスワード更新
func (ctrl AuthController) Logout(c *gin.Context) {
	fmt.Println("================リクエスト発生====================")

	// Cookie ログアウト認証
	auth_cookie.GetMiddleware().LogoutHandler(c)
	c.JSON(http.StatusOK, nil)
}
