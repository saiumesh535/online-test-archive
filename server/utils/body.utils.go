package utils

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

func BindRequestBody(c echo.Context, body interface{}) error {
	err := c.Bind(body)
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "Check request body",
		})
	}
	return nil
}