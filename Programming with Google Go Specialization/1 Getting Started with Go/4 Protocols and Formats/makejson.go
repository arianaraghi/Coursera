package main

import (
	"fmt"
	"encoding/json"
	"bufio"
	"os"
)

func main() {
	fmt.Println("Please write a name: ")
	scanner := bufio.NewScanner(os.Stdin)
	var name string
	if scanner.Scan(){
  		name = scanner.Text()
	}

	fmt.Println("Please write the address associated to the name: ")
	var address string
	if scanner.Scan(){
		address = scanner.Text()
	}

	m := make(map[string]string)
	m["name"] = name
	m["address"] = address

	js, err := json.MarshalIndent(m, "", " ")
	if err != nil{
		fmt.Printf("error")
	} else{
		fmt.Printf(string(js))
	}
}