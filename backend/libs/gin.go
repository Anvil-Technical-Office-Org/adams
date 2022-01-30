package libs

import (
	"bytes"
	"io/ioutil"

	"github.com/gin-gonic/gin"
)

/*
Bindによって消失したリクエストボディを復元します
*/
func RestoreRequestBody(c *gin.Context) {
	if cb, ok := c.Get(gin.BodyBytesKey); ok {
		if cbb, ok := cb.([]byte); ok {
			c.Request.Body = ioutil.NopCloser(bytes.NewBuffer(cbb))
		}
	}
}
