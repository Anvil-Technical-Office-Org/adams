package controllers

import (
	"backend/forms/user"
	"backend/logic"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type UserController struct{}

// 全件取得
func (ctrl UserController) Index(c *gin.Context) {
	fmt.Println("================リクエスト発生====================")

	var logic logic.UserLogic
	res, err := logic.GetAll()

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

// 全件取得
func (ctrl UserController) GetById(c *gin.Context) {
	fmt.Println("================リクエスト発生====================")

	var form user.UserForm

	// ShouldBind ⇒コンテキスト破棄されるよ！
	if err := c.ShouldBind(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var logic logic.UserLogic
	res, err := logic.GetById(form)

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

// パスワード更新
func (ctrl UserController) Update(c *gin.Context) {
	fmt.Println("================リクエスト発生====================")

	var form user.UserForm

	if err := c.ShouldBind(&form); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var logic logic.UserLogic
	err := logic.Update(form)

	if err != nil {
		c.AbortWithStatus(404)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		// ステータスコードを変更するときの例
		// 200
		c.JSON(http.StatusOK, gin.H{"status": "success"})
		// 300
		// c.JSON(http.StatusMultipleChoices, gin.H{"error": "300系のエラーだよ"})
		// 400
		// c.JSON(http.StatusBadRequest, gin.H{"error": "エラーだよー"})
		// 500
		// c.JSON(http.StatusInternalServerError, gin.H{"error": "500系のエラーが発生！"})
	}
}
