package main

import (
	"fmt"
	"strconv"
	"bufio"
	"os"
	"strings"
)

func GetInput() []int {
	numSli := make([]int, 0, 0)
	scanner := bufio.NewReader(os.Stdin)
	input, _, _ := scanner.ReadLine()
	s := strings.Split(string(input), " ")

	if len(s) >10{
		fmt.Println("You entered more than 10 integers!")
		return numSli
	}
	
	for _, val := range s {
		n, _ :=  strconv.Atoi(val)
		numSli = append(numSli, n)
	}

	return numSli
}

func BubbleSort(numSli []int) {
	for i:=0; i<len(numSli); i++ {
		for j:=0; j<len(numSli)-i-1; j++{
			if numSli[j] > numSli[j+1]{
				Swap(numSli, j)
			}
		}
	}
}

func Swap(numSli []int, i int){
	temp := numSli[i]
	numSli[i] = numSli[i+1]
	numSli[i+1] = temp
}

func main() {
	fmt.Printf("Please add up to 10 integers then press enter. If you add more than 10 integers, the program will crash: ")

	numSli := GetInput()
	if len(numSli)==0{
		return
	}

	BubbleSort(numSli)
	
	fmt.Println(numSli)

}