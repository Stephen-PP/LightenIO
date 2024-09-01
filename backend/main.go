package main

import (
	backend "backend/api"
	"fmt"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	test := backend.Test{}
	fmt.Println(test.Hello())
}
