package main

import (
	"github.com/joho/godotenv"
	"log"
	"online-test/server"
	"online-test/server/database"
	"online-test/server/types"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	PGInstance := database.ConnectPostgresSQL()
	appDep := types.AppDep{PGInstance: PGInstance}
	server.InitServer(appDep)
}
