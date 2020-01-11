package routes

import (
	"github.com/labstack/echo/v4"
	authModel "online-test/server/models/auth"
	model "online-test/server/models/questions"
	testModel "online-test/server/models/test"
	"online-test/server/routes/auth"
	"online-test/server/routes/questions"
	"online-test/server/routes/test"
	"online-test/server/types"
)

func AppRoutes(e *echo.Echo, dep types.AppDep) {
	// Auth routes
	auth.AuthRoutes(e.Group("/auth"), auth.AuthHandler{
		Model: authModel.AuthModel{PGInstance: dep.PGInstance},
	})

	// Test routes
	test.TestRoutes(e.Group("/test"), test.TestHandler{
		Model: testModel.TestModel{PGInstance: dep.PGInstance},
	})

	// question routes
	questions.QuestionRoutes(e.Group("/questions"), questions.QuestionHandler{
		Model: model.QuestionsModel{PGInstance: dep.PGInstance},
	})
}
