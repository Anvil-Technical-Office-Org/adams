package config

import (
	"github.com/spf13/viper"
)

type Config struct {
	Database Database `yml:"database"`
}

type Database struct {
	Host     string `yml:"host"`
	Port     int    `yml:"port"`
	User     string `yml:"user"`
	Password string `yml:"password"`
	Name     string `yml:"name"`
}

var c *Config

func Init(env string) {
	viper.SetConfigName(env)
	viper.SetConfigType("yml")
	viper.AddConfigPath("config/")

	err := viper.ReadInConfig()
	if err != nil {
		panic(err)
	}

	var config Config
	err = viper.Unmarshal(&config)
	if err != nil {
		panic(err)
	}
	c = &config
}

func GetConfig() *Config {
	return c
}
