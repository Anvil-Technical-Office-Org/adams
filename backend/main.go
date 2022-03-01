package main

import (
	"backend/config"
	"backend/db"
	"backend/server"
	"flag"
	"fmt"
)

func main() {
	// TODO : 他の実装との兼ね合いもあって環境変数で設定ファイルを切り替えたほうが良さそう
	env := flag.String("e", "development", "")
	isReset := flag.Bool("reset", false, "")
	flag.Parse()
	config.Init(*env)
	db.Init(*isReset)
	defer db.Close()
	fmt.Println("============リクエスト発生====================")
	// 認証系ミドルウェアの有効化
	//auth.AuthMiddlewareInit()
	if err := server.Init(); err != nil {
		panic(err)
	}
}
