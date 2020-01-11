package static

import (
	"github.com/labstack/echo/v4"
	"log"
	"os"
	"path"
)

func ServeClient(e *echo.Echo) {
	// static routes
	cwd, err := os.Getwd()
	if err != nil {
		log.Fatal("Unable to get current directory", err)
	}
	clientPath := path.Join(cwd, "client", "build")
	e.Static("/", clientPath)
}
