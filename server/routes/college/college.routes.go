package college

import (
	"github.com/labstack/echo/v4"
	collegeModel "online-test/server/models/college"
)

type CollegeHandler struct {
	Model collegeModel.CollegeModel
}

func CollegeRoutes(e *echo.Group, handler CollegeHandler) {
	e.POST("", handler.CreateCollege)
}
