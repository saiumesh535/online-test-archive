package auth

import (
	"github.com/labstack/echo/v4"
	"online-test/server/models/auth"
)

type AuthHandler struct {
	Model auth.AuthModel
}

func AuthRoutes(e *echo.Group, handler AuthHandler) {
	e.POST("/login", handler.Login)
}
