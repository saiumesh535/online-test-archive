package auth

import (
	"database/sql"
	"errors"
	"github.com/labstack/echo/v4"
	"net/http"
	"online-test/server/types"
	"online-test/server/utils"
)

func (handler AuthHandler) Login(c echo.Context) error {
	var userLogin types.UserLogin
	_ = utils.BindRequestBody(c, &userLogin)
	var user types.User
	err := handler.Model.LoginModel(userLogin, &user)
	if errors.Is(err, sql.ErrNoRows) {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"message": "check username and password",
		})
	}
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"message": err.Error(),
		})
	}
	return c.JSON(http.StatusOK, user)
}
