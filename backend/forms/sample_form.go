package forms

type SampleForm struct {
	Name string `json:"name" binding:"required"`
}

// TODO : モデルの間に挟んでバリデーションとかしたい
// func (form *SampleForm) Create() (*models.Sample, error) {
// 	sample := new(models.Sample)
// 	sample.Name = form.Name

// }
