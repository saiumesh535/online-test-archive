package types

import uuid "github.com/satori/go.uuid"

type AttendeesRequestBody struct {
	Attendees []*Attendee `json:"attendees"`
}

type Attendee struct {
	Name      string `json:"name" db:"name"`
	Email     string `json:"email" db:"email"`
	Pin       string `json:"pin" db:"pin"`
	CollegeID int64  `json:"collegeId" db:"college_id"`
}

func (attendee *Attendee) UpdatePIN() {
	attendee.Pin = uuid.NewV4().String()
}
