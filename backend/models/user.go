package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name     string `json:"name"`
	Business string `json:"business"`
	Email    string `gorm:"unique" json:"email"`
	Password string `json:"password"`
}
