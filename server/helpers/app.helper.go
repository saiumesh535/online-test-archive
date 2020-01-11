package helpers

import (
	"fmt"
	"os"
)

func GetPort() string {
	return fmt.Sprintf("localhost:%s", os.Getenv("PORT"))
}
