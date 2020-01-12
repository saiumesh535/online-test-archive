package utils

type ErrorResponse struct {
	Message string `json:"message"`
	Error   string `json:"error"`
}

func RequestError(err error) ErrorResponse {
	return ErrorResponse{
		Error:   err.Error(),
		Message: err.Error(),
	}
}

