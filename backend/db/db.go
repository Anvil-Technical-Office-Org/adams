package db

import (
	"backend/config"
	"backend/models"
	"bytes"
	"text/template"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var d *gorm.DB

func Init(isReset bool) {
	var err error
	d, err = gorm.Open(postgres.Open(createDns()), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	if isReset {
		autoDropTable()
	}

	autoMigration()
}
func GetDb() *gorm.DB {
	return d
}

func Close() {
	sqlDB, err := d.DB()
	if err != nil {
		panic(err)
	}

	if err := sqlDB.Close(); err != nil {
		panic(err)
	}
}

// テーブルの削除
func autoDropTable() {
	d.Migrator().DropTable(&models.Sample{})
}

// マイグレート処理
func autoMigration() {
	// uuidを使用可能にするための設定
	d.Exec(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`)
	// TODO : DropもMigrationも両方本当はリストを渡して管理出来るようにしたい。
	// interfaceの配列の扱いが理解できなかったので後でやる
	d.AutoMigrate(&models.Sample{})
}

type FieldsToReplace struct {
	Host     string
	Port     int
	User     string
	Password string
	Name     string
}

// DNSを生成して返却する
func createDns() (result string) {
	c := config.GetConfig()
	var buffer bytes.Buffer
	//lint:ignore SA4006 OK
	tmp, err := template.New("").Parse("host={{.Host}} port={{.Port}} user={{.User}} password={{.Password}} dbname={{.Name}} ")
	to := FieldsToReplace{
		Host:     c.Database.Host,
		Port:     c.Database.Port,
		User:     c.Database.User,
		Password: c.Database.Password,
		Name:     c.Database.Name,
	}
	err = tmp.Execute(&buffer, to)
	if err != nil {
		panic(err)
	}
	options := "sslmode=disable TimeZone=Asia/Tokyo"
	result = buffer.String() + options
	return
}
