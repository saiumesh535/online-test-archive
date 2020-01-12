package utils

type SuccessResponse struct {
	Status bool `json:"status"`
	Payload interface{} `json:"payload"`
}

func RequestResponse(payload interface{}) SuccessResponse {
	return SuccessResponse{
		Status: true,
		Payload: payload,
	}
}
