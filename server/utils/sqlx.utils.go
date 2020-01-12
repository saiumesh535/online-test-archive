package utils

import (
	"database/sql"
)

const (
	PGUniqueViolation = "unique_violation"
)

func SqlXErrTrans(tsx *sql.Tx, err error) error {
	if err != nil {
		tsx.Rollback()
	}
	return err
}
