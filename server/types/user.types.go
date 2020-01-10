package types

type UserLogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type User struct {
	UserID int `json:"user_id" db:"user_id"`
	Username string `json:"username"`
}