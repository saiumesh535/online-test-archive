package attendee

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"online-test/server/types"
	"online-test/server/utils"
)

func (handler AttendeeHandler) CreateAttendees(c echo.Context) error {
	var body types.AttendeesRequestBody
	if err := utils.BindRequestBody(c, &body); err != nil {
		return err
	}
	attendees := body.Attendees
	for _, v := range attendees {
		v.UpdatePIN()
	}
	err := handler.Model.CreateAttendeesModel(attendees)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.RequestError(err))
	}
	return c.NoContent(http.StatusOK)
}
