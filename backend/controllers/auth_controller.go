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
		//c.SetSameSite(http.SameSiteStrictMode)

		// maxAge := 10
		// domain := "localhost"
		// secure := false
		// httpOnly := true

		// // // クッキー作る奴　これやっとけば返る
		// c.SetCookie("cookie_test", "sample_cookie_value", maxAge, "/", domain, secure, httpOnly)
		// Cookie ログイン認証
		auth_cookie.GetMiddleware().LoginHandler(c)

		c.JSON(http.StatusOK, res)

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

		// maxAge := 10
		// domain := "localhost"
		// secure := false
		// httpOnly := true
		// // クッキー作る奴　これやっとけば返る
		// c.SetCookie("cookie_test", "sample_cookie_value", maxAge, "/", domain, secure, httpOnly)
		// 200
		c.JSON(http.StatusOK, resultForm)
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
