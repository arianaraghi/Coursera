package main

import (
	"fmt"
	"strconv"
	"strings"
	"sort"
	"math"
	"bufio"
	"os"
	"sync"
)


func main() {
	scanner := bufio.NewReader(os.Stdin)
	
	fmt.Println("Please write a series of integers space separated: ")
	str, _ := scanner.ReadString('\n')

	s := strings.Split(strings.TrimSpace(str), " ")
	arr := make([]int, 0, len(s))

	for _, val := range s{
		n, _ := strconv.Atoi(val)
		arr = append(arr, n)
	}
	var wg sync.WaitGroup
	for i:=0; i<4; i++{
		st := int(math.Floor(float64((len(arr)*i)/4)))
		var en int
		if i == 3{
			en = len(arr)
		} else{
			en = st + int(math.Floor(float64((len(arr))/4)))
		}
		wg.Add(1)

		go func(arrA []int){
			fmt.Println("Now sorting: ", arrA)
			sort.Ints(arrA)

			wg.Done()
			fmt.Println("Sorted: ", arrA)
		}(arr[st:en])

	}
	wg.Wait()

	//The best way to handle here is to write a merge() function that runs in O(n) and merges the 
	//the sorted pieces into one piece. But, because I'm lazy, I'm gonna use sort() function again.
	//Sorry :D
	sort.Ints(arr)
	fmt.Println(len(arr))
	fmt.Println("The final sorted array:", arr)

}