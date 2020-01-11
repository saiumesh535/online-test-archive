package types

type Test struct {
	ID     int    `json:"id" db:"id"`
	Name   string `json:"name" db:"name"`
	Timer  int    `json:"timer" db:"timer"`
	CutOff int    `json:"cutoff" db:"cutoff"`
}
