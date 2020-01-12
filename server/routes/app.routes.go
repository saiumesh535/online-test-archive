package routes

import (
	"github.com/labstack/echo/v4"
	attendeeModel "online-test/server/models/attendee"
	authModel "online-test/server/models/auth"
	collegeModel "online-test/server/models/college"
	model "online-test/server/models/questions"
	testModel "online-test/server/models/test"
	"online-test/server/routes/attendee"
	"online-test/server/routes/auth"
	"online-test/server/routes/college"
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

	// college routes
	college.CollegeRoutes(e.Group("/college"), college.CollegeHandler{
		Model: collegeModel.CollegeModel{PGInstance: dep.PGInstance},
	})

	// attendees routes
	attendee.AttendeeRoutes(e.Group("/attendees"), attendee.AttendeeHandler{
		Model: attendeeModel.AttendeeModel{PGInstance: dep.PGInstance},
	})
}
