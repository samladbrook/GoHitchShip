package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func LogoutRoutes(r *gin.Engine) {
	r.POST("/api/logout", func(c *gin.Context) {
		// Optionally: get JWT from Authorization header and blacklist it
		c.JSON(http.StatusOK, gin.H{"message": "Logged out"})
	})
}
