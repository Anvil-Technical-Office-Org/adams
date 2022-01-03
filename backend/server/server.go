package server

func Init() error {
	r := router()
	return r.Run()
}
