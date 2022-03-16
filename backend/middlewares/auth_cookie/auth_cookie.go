package auth_cookie

import (
	"backend/forms"
	"fmt"
	"net/http"
	"os"
	"time"

	jwt "github.com/appleboy/gin-jwt/v2"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

var auth *jwt.GinJWTMiddleware

// 認証系のミドルウェアを作成する
func AuthMiddlewareInit () {
	// TODO : ENVファイルの読み込みのラッパーを作成して、簡単にENVファイルの環境変数を取得出来る仕組みを用意
	// 本番環境はENVファイルが無いので、ENVファイルがない場合は環境変数から取得するように実装する
	if err := godotenv.Load(); err != nil {
		fmt.Println("ENVファイルの読み込みに失敗しました")
	}

	var err error
	// TODO : 環境変数によってドメインを切り替える
	cookieDomain := "localhost"
	// Cookieの有効期限を設定(一旦1時間で切れるようにしておく)
	cookieMaxAge := time.Hour
	// TODO : 環境変数によって切り替え
	cookieSecure := false


	auth, err = jwt.New(&jwt.GinJWTMiddleware{
		Realm: "test zone",
		Key: []byte(os.Getenv("SECRET_KEY")),
		Timeout: time.Hour,
		MaxRefresh: time.Hour,
		IdentityKey: jwt.IdentityKey,
		SendCookie: true,
		CookieName: "access_token",
		CookieMaxAge: cookieMaxAge,
		CookieDomain: cookieDomain,
		SecureCookie: cookieSecure,
		CookieHTTPOnly: true,
		CookieSameSite: http.SameSiteStrictMode,
		TokenLookup: "header: Authorization, cookie: access_token",
		TokenHeadName: "Bearer",
		// callBackハンドラー　auth.GetMiddleware().LoginHandler(c)
		Authenticator: func(c *gin.Context) (interface{}, error) {
			// fmt.Println("=============Authenticator==========")
			// var sample forms.SampleForm
			// if err := c.ShouldBind(&sample); err != nil {
			// 	fmt.Println("Formのバリデーションで失敗しました")
			// 	return "", jwt.ErrMissingLoginValues
			// }

			// name := sample.Name
			// password := sample.Password

			// var sampleService service.SampleService
			// // TODO : DB周りの処理はテキトー
			// dbSample, err := sampleService.GetByName(name)
			// if err != nil {
			// 	fmt.Println("DB取得時にエラーが発生しました")
			// }

			// fmt.Println("req name:", name)
			// fmt.Println("req pass:", password)
			// fmt.Println("db name:", dbSample.Name)
			// fmt.Println("db pass:", dbSample.Password)

			// if (name == dbSample.Name && password == dbSample.Password) {
			// 	fmt.Println("認証に成功しました")
			// 	return &forms.SampleForm{
			// 		Id: dbSample.ID.String(),
			// 		Name: name,
			// 	}, nil
			// }

			// fmt.Println("認証に失敗しました")
			//return nil, jwt.ErrFailedAuthentication
			return nil ,nil
		},

		// これも動く
		PayloadFunc: func(data interface{}) jwt.MapClaims {
			fmt.Println("=============PayloadFunc==========")
			if v, ok := data.(*forms.SampleForm); ok {
				return jwt.MapClaims{
					"user_id": v.Id,
					"sample_name": v.Name,
				}
			}
			return jwt.MapClaims{}
		},

		
		LoginResponse: func(c *gin.Context, code int, token string, expire time.Time) {
			// クライアント側でCookieの保存されたJWTにアクセス不可のため認証済みのフラグをセットしておく
			expireCookie := time.Now().Add(cookieMaxAge)
			maxage := int(expireCookie.Unix() - time.Now().Unix())
			c.SetCookie("isAuthenticated", "true", maxage, "/", cookieDomain, cookieSecure, false)
			// c.JSON(http.StatusOK, gin.H{
			// 	"code": http.StatusOK,
			// 	"token": token,
			// 	"expire": expire.Format(time.RFC3339),
			// })
		},
		LogoutResponse: func(c *gin.Context, code int) {
			c.SetCookie("isAuthenticated", "", -1, "/", cookieDomain, cookieSecure, false)
			// c.JSON(http.StatusOK, gin.H{
			// 	"code": http.StatusOK,
			// })
		},


		
		// 認証失敗時の処理を拡張したければここを修正する
		// とりあえず今は、ライブラリの実装をそのままコピペ
		Unauthorized: func(c *gin.Context, code int, message string) {
			// c.JSON(code, gin.H{
			// 	"code": code,
			// 	"message": message,
			// })
		},

	})

	if err != nil {
		fmt.Println("JWT Error:", err.Error())
	}

	errInit := auth.MiddlewareInit()
	if errInit != nil {
		fmt.Println("authMiddleware.MiddlewareInit() Error:", errInit.Error())
	}
}

func GetMiddleware() *jwt.GinJWTMiddleware {
	return auth
}
