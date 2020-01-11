package questions

import (
	"github.com/labstack/echo/v4"
	model "online-test/server/models/questions"
)

type QuestionHandler struct {
	Model model.QuestionsModel
}

func QuestionRoutes(e *echo.Group, handler QuestionHandler) {
	e.POST("", handler.CreateQuestion)
}
