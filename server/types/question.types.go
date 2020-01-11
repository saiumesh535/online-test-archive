package types

type QuestionsBody struct {
	TestId   int64    `json:"testID"`
	Question string   `json:"question"`
	Options  []string `json:"options"`
	AnsIndex int64    `json:"ansIndex"`
}

type QuestionInsert struct {
	TestId   int64  `json:"testID" db:"test_id"`
	Question string `json:"question" db:"question"`
}

type OptionInsert struct {
	QuestionId int64  `json:"questionID" db:"question_id"`
	Option     string `json:"option" db:"option"`
}
