package routes

import (
	"github.com/labstack/echo/v4"
	auth2 "online-test/server/models/auth"
	"online-test/server/routes/auth"
	"online-test/server/types"
)

func AppRoutes(e *echo.Echo, dep types.AppDep) {
	// Auth routes
	auth.AuthRoutes(e.Group("/auth"), auth.AuthHandler{
		Model: auth2.AuthModel{PGInstance: dep.PGInstance},
	})
}