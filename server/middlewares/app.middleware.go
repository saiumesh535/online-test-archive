package middlewares

import (
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/echo/v4"
)

func AppMiddleware(e *echo.Echo) {
	e.Use(middleware.Recover())
}