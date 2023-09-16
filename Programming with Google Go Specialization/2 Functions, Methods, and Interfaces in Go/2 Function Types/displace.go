package main

import (
	"fmt"
)

func GenDisplaceFn(a, v, s float64) func(int) float64 {
	return func(t int) float64{
		return ((a*float64(t*t))/2) + v*float64(t) + s
	}
}

func main() {
	var acc, inVel, inDis float64
	fmt.Printf("Please enter a floating point value for acceleration: ")
	fmt.Scanln(&acc)

	fmt.Printf("Please enter an floating point value for initial velocity: ")
	fmt.Scanln(&inVel)

	fmt.Printf("Please enter an floating point value for initial displacement: ")
	fmt.Scanln(&inDis)

	fmt.Printf("Please enter an integer value for time: ")
	var time int
	fmt.Scan(&time)

	f := GenDisplaceFn(acc, inVel, inDis)
	fmt.Printf("The displacement at time %v is %v", time, f(time))
}