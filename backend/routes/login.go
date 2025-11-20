package routes

import (
	"backend/database"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte("b1f9d3e8a7c6f4d2b9e0a1c3f5d6b8e0c7f2a4b9d6e1f3c5") //move to environment variable to hide

func LoginRoutes(r *gin.Engine) {

	r.POST("/api/login", func(c *gin.Context) {

		var body struct {
			Email    string `json:"email"`
			Password string `json:"password"`
		}

		if err := c.ShouldBindJSON(&body); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
			return
		}

		// Fetch user
		var user struct {
			ID       int
			Password string
			Name     string
			Email    string
		}

		err := database.DB.QueryRow(`
			SELECT id, password_hash, name, email FROM users WHERE email=$1
		`, body.Email).Scan(&user.ID, &user.Password, &user.Name, &user.Email)

		if err != nil {
			c.JSON(401, gin.H{"error": "Invalid email or password"})
			return
		}

		// check password
		if bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password)) != nil {
			c.JSON(401, gin.H{"error": "Invalid email or password"})
			return
		}

		// Create JWT
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"id":  user.ID,
			"exp": time.Now().Add(time.Hour * 72).Unix(),
		})

		tokenStr, _ := token.SignedString(jwtKey)

		c.JSON(200, gin.H{
			"token": tokenStr,
			"user": gin.H{
				"name":  user.Name,
				"email": user.Email,
			},
		})
	})
}
