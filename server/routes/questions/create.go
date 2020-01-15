package questions

import (
	"net/http"
	"online-test/server/types"
	"online-test/server/utils"

	"github.com/labstack/echo/v4"
)

func (handler QuestionHandler) CreateQuestion(c echo.Context) error {
	var questionBody types.QuestionsBody
	_ = utils.BindRequestBody(c, &questionBody)
	questionId, err := handler.Model.CreateQuestion(questionBody)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.RequestError(err))
	}
	return c.JSON(http.StatusOK, utils.RequestResponse(questionId))
}
