package types

import "github.com/jmoiron/sqlx"

type AppDep struct {
	PGInstance *sqlx.DB
}
