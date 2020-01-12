package college

import (
	"github.com/jmoiron/sqlx"
	"online-test/server/types"
)

type CollegeModel struct {
	PGInstance *sqlx.DB
}

func (model CollegeModel) CreateCollegeModel(college *types.College) (int64, error) {
	rows, err := model.PGInstance.NamedQuery("INSERT INTO colleges (test_id, uuid, name) VALUES (:test_id, :uuid, :name) RETURNING id", college)
	if err != nil {
		return 0, err
	}
	var collegeID int64
	for rows.Next() {
		if err = rows.Scan(&collegeID); err != nil {
			return 0, err
		}
	}
	defer rows.Close()
	return collegeID, nil
}
