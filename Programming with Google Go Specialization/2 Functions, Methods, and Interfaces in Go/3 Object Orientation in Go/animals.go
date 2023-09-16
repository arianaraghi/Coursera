package main

import (
	"fmt"
	"strings"
)

type animal struct {
	food, locomotion, noise string
}

func (an animal) Eat() string{
	return an.food
}

func (an animal) Move() string{
	return an.locomotion
}

func (an animal) Speak() string{
	return an.noise
}
func main() {
	table := map[string]animal{
		"cow" : animal{"grass", "walk", "moo"}, 
		"bird" : animal{"worms", "fly", "peep"},
		"snake" : animal{"mice", "slither", "hsss"},
	}
	for true {
		fmt.Printf(">Please enter the name of the animal from \"cow,\" \"bird,\" and \"snake\"\n")
		var userAnimal string
		fmt.Scan(&userAnimal)

		if ((strings.Compare(userAnimal, "cow") != 0) && (strings.Compare(userAnimal, "bird") != 0) && (strings.Compare(userAnimal, "snake") != 0)) {
			fmt.Println("What you entered is not an option! Please try again")
			continue
		}

		flag := true
		for flag{
			fmt.Printf(">Please enter the information you want to know about the animal from \"eat,\" \"move,\" and \"speak\"\n")
			var userAct string
			fmt.Scan(&userAct)

			switch act := userAct; act {
			case "eat":
				fmt.Println(table[userAnimal].Eat())
				flag = false
			case "move":
				fmt.Println(table[userAnimal].Move())
				flag = false
			case "speak":
				fmt.Println(table[userAnimal].Speak())
				flag = false
			default:
				fmt.Println("What you entered is not an option! Please try again")
				continue
			}
		}
	}
}