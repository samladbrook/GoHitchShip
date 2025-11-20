package main

import (
	"backend/database"
	"backend/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	// Connect to the database
	if err := database.ConnectDatabase(); err != nil {
		panic("Failed to connect to database : " + err.Error())
	}

	r := gin.Default()
	r.Use(cors.Default())

	routes.RegisterRoutes(r)
	routes.LoginRoutes(r)

	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Hello from Go!"})
	})

	r.GET("/db-test", func(c *gin.Context) {
		var now string
		err := database.DB.QueryRow("SELECT NOW()").Scan(&now)
		if err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}
		c.JSON(200, gin.H{"db_time": now})
	})

	r.Run(":8080")
}
