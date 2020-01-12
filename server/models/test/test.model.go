package test

import (
	"github.com/jmoiron/sqlx"
	"online-test/server/types"
)

type TestModel struct {
	PGInstance *sqlx.DB
}

func (model TestModel) CreateTest(test *types.Test) (*sqlx.Rows, error) {
	return model.PGInstance.NamedQuery(`INSERT INTO tests (name, timer, cutoff) VALUES (:name, :timer, :cutoff) RETURNING id`, test)
}

func (model TestModel) GetTestsModel(tests *[]types.Test) error {
	return  model.PGInstance.Select(tests, "SELECT name, timer, cutoff FROM tests")
}