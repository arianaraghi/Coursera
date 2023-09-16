package main

import (
	"fmt"
	"bufio"
	"io/ioutil"
	"strings"
)

type Name struct {
	FName string
	LName string
}

var names []Name

func main() {
	var fileName string

	fmt.Printf("Enter file name: ")
	fmt.Scan(&fileName)

	bytes, err := ioutil.ReadFile(fileName)
	if err != nil {
		fmt.Println("Unable to read file: ", err)
	}

	scanner := bufio.NewScanner(strings.NewReader(string(bytes)))
	for scanner.Scan() {
		var name Name
		line := strings.Split(scanner.Text(), " ")
		name.FName = line[0]
		name.LName = line[1]

		names = append(names, name)
	}

	fmt.Println("Your file data is:")

	for _, name := range names {
		fmt.Printf("first name: %v, \tlast name: %v \n", name.FName, name.LName)
	}
}