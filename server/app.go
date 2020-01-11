package server

import (
	"github.com/labstack/echo/v4"
	"online-test/server/helpers"
	"online-test/server/middlewares"
	"online-test/server/routes"
	"online-test/server/routes/static"
	"online-test/server/types"
)

func InitServer(appDep types.AppDep) {
	e := echo.New()
	port := helpers.GetPort()

	// Application middleware
	middlewares.AppMiddleware(e)

	// application routes
	routes.AppRoutes(e, appDep)

	static.ServeClient(e)

	e.Logger.Fatal(e.Start(port))
}
