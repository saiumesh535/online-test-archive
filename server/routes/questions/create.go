package questions

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"online-test/server/types"
	"online-test/server/utils"
)

func (handler QuestionHandler) CreateQuestion(c echo.Context) error {
	var questionBody types.QuestionsBody
	_ = utils.BindRequestBody(c, &questionBody)
	err := handler.Model.CreateQuestion(questionBody)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.RequestError(err))
	}
	return c.NoContent(http.StatusOK)
}
