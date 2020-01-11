package utils

import (
	"database/sql"
)

func SqlXErrTrans(tsx *sql.Tx, err error) error {
	if err != nil {
		tsx.Rollback()
	}
	return err
}
