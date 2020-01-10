package database

import (
	_ "github.com/lib/pq"
	"github.com/jmoiron/sqlx"
	"log"
	"os"
)

func ConnectPostgresSQL() *sqlx.DB {
	db, err := sqlx.Connect("postgres", os.Getenv("DATABASE_PG_URL"))
	if err != nil {
		log.Fatal(err)
	}
	return db
}