package test

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"online-test/server/models/test"
	"online-test/server/types"
	"online-test/server/utils"
)

type TestHandler struct {
	Model test.TestModel
}

func TestRoutes(e *echo.Group, handler TestHandler) {
	e.POST("", handler.CreateTest)
}

func (handler TestHandler) CreateTest(c echo.Context) error {
	var testBody types.Test
	_ = utils.BindRequestBody(c, &testBody)
	result, err := handler.Model.CreateTest(&testBody)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, utils.RequestError(err))
	}
	var testId int64
	for result.Next() {
		err = result.Scan(&testId)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, utils.RequestError(err))
		}
	}
	return c.JSON(http.StatusOK, map[string]int64{
		"id": testId,
	})
}
