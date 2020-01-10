package helpers

import (
	"fmt"
	"os"
)

func GetPort() string {
	return fmt.Sprintf(":%s", os.Getenv("PORT"))
}
