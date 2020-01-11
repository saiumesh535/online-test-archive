package model

import (
	"github.com/jmoiron/sqlx"
	"online-test/server/types"
	util "online-test/server/utils"
)

type QuestionsModel struct {
	PGInstance *sqlx.DB
}

func (model QuestionsModel) CreateQuestion(input types.QuestionsBody) error {
	tsx, err := model.PGInstance.Begin()
	if err != nil {
		return err
	}
	question := types.QuestionInsert{
		TestId:   input.TestId,
		Question: input.Question,
	}
	smt, err := tsx.Prepare("INSERT INTO questions (test_id, question) VALUES ($1, $2) RETURNING id;")
	if err != nil {
		return err
	}
	defer smt.Close()
	questionRow, err := smt.Query(question.TestId, question.Question)
	if err != nil {
		return util.SqlXErrTrans(tsx, err)
	}
	var questionId int64
	for questionRow.Next() {
		err := questionRow.Scan(&questionId)
		if err != nil {
			return util.SqlXErrTrans(tsx, err)
		}
	}
	questionRow.Close()
	var options []types.OptionInsert
	for _, v := range input.Options {
		options = append(options, types.OptionInsert{
			QuestionId: questionId,
			Option:     v,
		})
	}
	optionSmt, err := tsx.Prepare("INSERT INTO options (question_id, option) VALUES ($1, $2) RETURNING id;")
	if err != nil {
		return util.SqlXErrTrans(tsx, err)
	}
	defer optionSmt.Close()
	var optionIDS []int64
	for _, v := range options {
		optionRow, err := optionSmt.Query(v.QuestionId, v.Option)
		if err != nil {
			return util.SqlXErrTrans(tsx, err)
		}
		for optionRow.Next() {
			var optionID int64
			err = optionRow.Scan(&optionID)
			if err != nil {
				return util.SqlXErrTrans(tsx, err)
			}
			optionIDS = append(optionIDS, optionID)
		}
		optionRow.Close()
	}
	anseOptionId := optionIDS[input.AnsIndex]
	if anseOptionId != 0 {
		ansSmt, err := tsx.Prepare("INSERT INTO answers (question_id, option_id) VALUES ($1, $2) RETURNING id;")
		if err != nil {
			return util.SqlXErrTrans(tsx, err)
		}
		defer ansSmt.Close()
		answerRows, err := ansSmt.Query(questionId, anseOptionId)
		if err != nil {
			return util.SqlXErrTrans(tsx, err)
		}
		answerRows.Close()
	}
	err = tsx.Commit()
	if err != nil {
		return util.SqlXErrTrans(tsx, err)
	}
	return nil
}
