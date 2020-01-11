package attendee

import (
	"fmt"
	"online-test/server/types"
	"strconv"
	"strings"

	"github.com/jmoiron/sqlx"
)

type AttendeeModel struct {
	PGInstance *sqlx.DB
}

func ReplaceSQL(stmt, pattern string, len int) string {
	pattern += ","
	stmt = fmt.Sprintf(stmt, strings.Repeat(pattern, len))
	n := 0
	for strings.IndexByte(stmt, '?') != -1 {
		n++
		param := "$" + strconv.Itoa(n)
		stmt = strings.Replace(stmt, "?", param, 1)
	}
	return strings.TrimSuffix(stmt, ",")
}

func (model AttendeeModel) CreateAttendeesModel(attendees []*types.Attendee) error {
	vals := []interface{}{}
	for _, row := range attendees {
		vals = append(vals, row.Name, row.Email, row.CollegeID, row.Pin)
	}
	sqlStr := `INSERT INTO attendees(name, email, college_id, pin) VALUES %s`
	sqlStr = ReplaceSQL(sqlStr, "(?, ?, ?, ?)", len(attendees))
	_, err := model.PGInstance.Exec(sqlStr, vals...)
	if err != nil {
		return err
	}
	return nil
}
