package main

import (
	"backend/config"
	"backend/db"
	"backend/server"
	"flag"
)

func main() {
	env := flag.String("e", "development", "")
	isReset := flag.Bool("reset", false, "")
	flag.Parse()
	config.Init(*env)
	db.Init(*isReset)
	defer db.Close()
	if err := server.Init(); err != nil {
		panic(err)
	}
}
