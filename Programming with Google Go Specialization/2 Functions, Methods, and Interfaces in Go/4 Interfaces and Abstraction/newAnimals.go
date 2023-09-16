package main

import (
	"fmt"
)

type Animal interface {
	Eat() 
	Move() 
	Speak() 
}

type Cow struct {
}
func (c *Cow) Eat() {
	fmt.Println("grass")
}
func (c *Cow) Move() {
	fmt.Println("walk")
}
func (c *Cow) Speak()  {
	fmt.Println("moo")
}

type Bird struct {
}
func (b *Bird) Eat() {
	fmt.Println("worms")
}
func (b *Bird) Move()  {
	fmt.Println("fly")
}
func (b *Bird) Speak() {
	fmt.Println("peep")
}


type Snake struct {
}
func (s *Snake) Eat() {
	fmt.Println("mice")
}
func (s *Snake) Move() {
	fmt.Println("slither")
}
func (s *Snake) Speak()  {
	fmt.Println("hsss")
}

func main() {
	animals := make(map[string]Animal)
	for true {
		var userCommand, userAnimal, userAct string

		fmt.Printf(">Please write your command from either \"newanimal 'name' 'type'\" or \"query 'name' 'act'\"\n")
		fmt.Scan(&userCommand, &userAnimal, &userAct)
		if userCommand == "query"{
			anim, err := animals[userAnimal]
			if err{
				switch userAct {
				case "eat":
					anim.Eat()
				case "move":
					anim.Move()
				case "speak":
					anim.Speak()
				default:
					fmt.Println("The act you requested is not in my options! Please try again!")
					continue
				}
			} else{
				fmt.Println("The name you requested is not in my options! Please try again!")
				continue
			}
		} else if userCommand == "newanimal"{
			switch userAct{
			case "cow":
				animals[userAnimal] = new(Cow)
			case "bird":
				animals[userAnimal] = new(Bird)
			case "snake":
				animals[userAnimal] = new(Snake)
			default:
				fmt.Println("The type you requested is not in my options! Please try again!")
				continue
			}
			fmt.Println("Created it!")
			
		} else{
			fmt.Printf("Your command is not one of my options! Please try again!")
			continue
		}
	}
}