package types

type UserLogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type User struct {
	ID       int    `json:"id" db:"id"`
	Username string `json:"username"`
}
