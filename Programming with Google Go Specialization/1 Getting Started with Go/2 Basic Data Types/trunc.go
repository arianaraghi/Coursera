package main

import "fmt"


func main() {
	fmt.Printf("Give me a floating point number: ")
	var floatNum float64
	fmt.Scan(&floatNum)

	fmt.Println(int64(floatNum))
}