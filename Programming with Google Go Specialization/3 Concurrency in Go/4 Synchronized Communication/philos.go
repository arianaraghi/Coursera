package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

type Chopstick struct {
	sync.Mutex
}

type Philosopher struct {
	leftCS,rightCS *Chopstick
	philosNo int
	hunger int
}

type Host struct{
	dinCap int
}

func (p Philosopher) Eat(host Host){
	for i := 0; i < p.hunger; i++ {
		host.dinCap += 1
		if host.dinCap < 2 {
			p.leftCS.Lock()
			p.rightCS.Lock()

			fmt.Printf("starting to eat: %d\n", p.philosNo)

			fmt.Printf("finishing eating: %d\n", p.philosNo)

			p.leftCS.Unlock()
			p.rightCS.Unlock()

			host.dinCap -= 1

			wg.Done()
		} else {
			p.Eat(host) 
		}
	}
}



func main() {
	CSticks := make([]*Chopstick,5)
	for i:=0;i<5;i++{
		CSticks[i] = new(Chopstick)
	}
	philos := make([]*Philosopher,5)
	for i:=0;i<5;i++{
		philos[i] = &Philosopher{
			leftCS:  CSticks[i],
			rightCS: CSticks[(i+1)%5],
			philosNo: i+1,
			hunger: 3,
		}
	}

	host := Host{dinCap: 0}

	for _, philo := range philos {
		wg.Add(3) 	
		go philo.Eat(host)
	}

	wg.Wait()
}