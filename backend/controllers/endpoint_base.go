package controllers

import (
	"github.com/gin-gonic/gin"
)

// エンドポイントの集合体
type Endpoint struct {
	EndpointList []EndpointBase
}

// 各エンドポイントの初期化　近々Rootingに移す
func InitEndPoint() (Endpoint) {
	var result Endpoint

	// コントローラー作ったら下記に書いていかないといけない
	// usersのRootingを一括作成
	result.EndpointList = append(result.EndpointList, CreateUserController().CreateEndpoint())
	// spaceのRootingを一括作成
	result.EndpointList = append(result.EndpointList, CreateSpaceController().CreateEndpoint())
	// AuthのRootingを一括作成
	result.EndpointList = append(result.EndpointList, CreateAuthController().CreateEndpoint())

	return result
}

// 1コントローラー分追加
func(ep *Endpoint) addEndpoint(epb EndpointBase) {
	ep.EndpointList = append(ep.EndpointList, epb)
	return
}

// エンドポイント
// １コントローラー分
type EndpointBase struct {
	Endpoint string
	Routings []RouteBase
}


// ルーティング追加
func (ep *EndpointBase)AddRoutings(methodType string,endpoint string, function gin.HandlerFunc){

	ep.Routings = append(ep.Routings,RouteBase{
		MethodType : methodType,
		Endpoint : endpoint,
		Function : function,
	})

}

// ルーティング一個分の構造体
type RouteBase struct {
	MethodType string
	Endpoint string
	Function gin.HandlerFunc
}

// コントローラーの共通インターフェース
type IController interface{
	CreateEndpoint() EndpointBase
}