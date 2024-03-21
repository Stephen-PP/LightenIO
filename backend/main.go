package main

import (
	backend "backend/api"
	"fmt"
)

func main() {
	test := backend.Test{}
	fmt.Println(test.Hello())
}
