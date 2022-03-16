package message

import (
	"github.com/spf13/viper"
)

// =====================================================
//	エラー、入力チェック判定時の共通返却値　構造体
// =====================================================
type Messages interface{
}


type HttpStatusErrors struct {
	Messages []message `yml:"httpStatusError"`
}

type InternalServerErrors struct {
	Messages []message `yml:"internalServerError"`
}

type message struct {
	Code     string `yml:"code"`
	Index    string `yml:"index"`
	Message  string  `yml:"message"`

}

var c HttpStatusErrors
var d InternalServerErrors

func Init() {
	viper.SetConfigName("messages")
	viper.SetConfigType("yml")
	viper.AddConfigPath("configFiles/")

	err := viper.ReadInConfig()
	if err != nil {
		panic(err)
	}

	var statusErrors HttpStatusErrors
	err = viper.Unmarshal(&statusErrors)
	if err != nil {
		panic(err)
	}
	c = statusErrors

	var internalErrors InternalServerErrors
	err = viper.Unmarshal(&internalErrors)
	if err != nil {
		panic(err)
	}
	d = internalErrors

}

func GetHttpStatusErrors() HttpStatusErrors {
	return c
}

func GetInternalServerErrors() InternalServerErrors {
	return d
}


func GetHttpStatusError(code string) message {
	var result message

	for _, v := range c.Messages {
		if v.Code == code {
			result = v 
			break;
		}
	}

	return result
}

func GetInternalServerError(code string) message {
	var result message

	for _, v := range d.Messages {
		if v.Code == code {
			result = v 
			break;
		}
	}

	return result
}

