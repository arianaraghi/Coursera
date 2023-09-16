package main

import "fmt"
import "strings"

func main() {
	fmt.Printf("Please enter a string: ")

	var s string
	fmt.Scan(&s)
	s = strings.ToLower(s)
	if strings.Contains(s, "a") && strings.HasPrefix(s, "i") && strings.HasSuffix(s, "n"){
		fmt.Printf("Found!")
	} else{
		fmt.Printf("Not Found!")
	}
}