package main

import "fmt"

func adder(x *int) int{
	*x = *x+1
	return *x
}

func main() {
	x := 10

	y := adder(&x)

	fmt.Printf("x = %v, \t y = %v\n", x, y)
	fmt.Println(&x)
	fmt.Println(*&x)
}