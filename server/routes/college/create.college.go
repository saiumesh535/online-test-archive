package college

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"online-test/server/types"
	"online-test/server/utils"
)

func (handler CollegeHandler) CreateCollege(c echo.Context) error {
	var college types.College
	if err := utils.BindRequestBody(c, &college); err != nil {
		return err
	}
	college.UpdateUUID()
	collegeID, err := handler.Model.CreateCollegeModel(&college)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.RequestError(err))
	}
	return c.JSON(http.StatusOK, map[string]int64{
		"id": collegeID,
	})
}
