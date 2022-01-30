package forms

type SampleForm struct {
	Id string `form:"id" json:"sample_id"`
	Name string `form:"name" json:"name" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}
