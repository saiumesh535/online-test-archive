package database

import (
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
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
