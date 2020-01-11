package attendee

import (
	"github.com/labstack/echo/v4"
	"online-test/server/models/attendee"
)

type AttendeeHandler struct {
	Model attendee.AttendeeModel
}

func AttendeeRoutes(e *echo.Group, handler AttendeeHandler) {
	e.POST("", handler.CreateAttendees)
}
