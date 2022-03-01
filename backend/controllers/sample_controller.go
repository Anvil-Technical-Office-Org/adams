package controllers

import (
	"backend/forms"
	"backend/middlewares/auth"
	"backend/service"
	"fmt"
	"net/http"

	jwt "github.com/appleboy/gin-jwt/v2"
	"github.com/gin-gonic/gin"
)

type SampleController struct{}

// GET
func (ctrl SampleController) Index(c *gin.Context) {
	fmt.Println("================リクエスト発生====================")
	var sample service.SampleService
	res, err := sample.GetAll()
	if err != nil {
		c.AbortWithStatus(404)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		// ステータスコードを変更するときの例
		// 200
		c.JSON(http.StatusOK, gin.H{"status": "success", "result": res})
		// 300
		// c.JSON(http.StatusMultipleChoices, gin.H{"error": "300系のエラーだよ"})
		// 400
		// c.JSON(http.StatusBadRequest, gin.H{"error": "エラーだよー"})
		// 500
		// c.JSON(http.StatusInternalServerError, gin.H{"error": "500系のエラーが発生！"})
	}
}

// POST
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

func (ctrl SampleController) ConfirmCookie (c *gin.Context) {
	fmt.Println("================Cookie確認====================")
	cookie_value, _ := c.Cookie("cookie_test")
	fmt.Println("Cookieの値 ====>  ", cookie_value)
	c.JSON(http.StatusOK, gin.H{"data": cookie_value})
}

func (ctrl SampleController) CreateCookie (c *gin.Context) {
	fmt.Println("================Cookie作成====================")
	maxAge := 10
	domain := "localhost"
	secure := false
	httpOnly := true

	// CORS
	c.SetSameSite(http.SameSiteStrictMode)
	// クッキー作る奴　これやっとけば返る
	c.SetCookie("cookie_test", "sample_cookie_value", maxAge, "/", domain, secure, httpOnly)
	c.JSON(http.StatusOK, gin.H{"data": "create cookie"})
}

func (ctrl SampleController) ConfirmRequestBody(c *gin.Context) {
	fmt.Println("================リクエストボディーの値を確認====================")
	var sample forms.SampleForm
	if err := c.ShouldBind(&sample); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	fmt.Println("name:", sample.Name, " password:", sample.Password)
	c.JSON(http.StatusOK, gin.H{"response": sample})
}

func (ctrl SampleController) ConfirmAuth (c *gin.Context) {
	fmt.Println("================認証ありのエンドポイントテスト====================")
	claims := jwt.ExtractClaims(c)
	c.JSON(http.StatusOK, gin.H{
		"name": claims["sample_name"],
	})
}


func (ctrl SampleController) SignupHandler (c *gin.Context) {
	
	fmt.Println("================サインアップ====================")
	var sample service.SampleService
	_, err := sample.Create(c)
	if err != nil {
		c.AbortWithStatus(400)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		// 以降の処理はライブラリにお任せ
		auth.GetMiddleware().LoginHandler(c)
	}
}
