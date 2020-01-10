package auth

import "github.com/jmoiron/sqlx"

type AuthModel struct {
	PGInstance *sqlx.DB
}


