package routes

import (
	"backend/database"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func RegisterRoutes(r *gin.Engine) {

	r.POST("/api/register", func(c *gin.Context) {

		var body struct {
			Name     string `json:"name"`
			Business string `json:"business"`
			Email    string `json:"email"`
			Password string `json:"password"`
		}

		if err := c.ShouldBindJSON(&body); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
			return
		}

		// hash password
		hashed, _ := bcrypt.GenerateFromPassword([]byte(body.Password), 14)

		// insert user into DB
		_, err := database.DB.Exec(`
			INSERT INTO users (name, business, email, password_hash)
			VALUES ($1, $2, $3, $4)
		`, body.Name, body.Business, body.Email, string(hashed))

		if err != nil {
			c.JSON(400, gin.H{"error": err.Error()}) // show the real DB error
			return
		}

		c.JSON(200, gin.H{"message": "User created"})
	})
}
