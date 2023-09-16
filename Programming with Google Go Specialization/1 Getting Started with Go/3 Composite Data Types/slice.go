package main

import "fmt"
import "strconv"
import "sort"
import "strings"


func main() {

	counter:= 0
	sli := make([]int, 3)

	for {
		fmt.Printf("If you wnat to add a number write it, otherwise write X: ")
		var userNumber string

		fmt.Scan(&userNumber)
		if strings.Compare(userNumber, "X") == 0{
			fmt.Printf("OK, we are done! Your array is: %v\n", sli)
			break
		} else {
			userNumber, er := strconv.Atoi(userNumber)
			if er != nil{
				fmt.Printf("This is neither an integer, nor X. ")
				continue
			}
			if counter < 3{
				for i, item := range sli {
					if item == 0 {
						sli[i] = userNumber
						break
					}
				}
			} else{
				sli = append(sli, userNumber)
			}
			counter++
			
			sort.Ints(sli)
			fmt.Println(sli)
		}
	}
}