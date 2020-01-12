package types

import uuid "github.com/satori/go.uuid"

type College struct {
	Name   string `json:"name" db:"name"`
	TestId int64  `json:"testID" db:"test_id"`
	UUID   string `json:"uuid" db:"uuid"`
}

func (college *College) UpdateUUID() {
	college.UUID = uuid.NewV4().String()
}
