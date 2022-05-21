package common

import (
	"time"
)

// 日付型の文字列変換
func TimeToString(t time.Time) string {
	// UTCで返したいので第一引数layout は省略
	//		変換出来て無いから多分間違ってるよ
	// ⇒ぶっちゃけそのまま返せば良いという神託を賜った そりゃそうだろう
	return t.String()
}

// 文字列型の日付変換
func StringToTime(str string) time.Time {
	t, _ := time.Parse("", str)
	return t
}
