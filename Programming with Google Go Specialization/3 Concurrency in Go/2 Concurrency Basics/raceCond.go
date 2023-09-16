package main


import (
	"fmt"
	"sync"
)

var x int

func incrementor(wg *sync.WaitGroup) {
	defer wg.Done()
	for i:=0; i<100; i++{
		x++
	}
	/* Race condition occurs because of concurrent 
	 * access of two go-routines at the same time.
	 * x++ is not atomic instructions at machine code level. 
	 * Also, it repeats 100 times for each goroutine.
	 * Interleaving of these 200 instructions from two different
	 * goroutines at runtime is non-deterministic.
	 * Final result vary acc. to interleaving, so it is not deterministic. 
	 * It can output 200 or some other number less than 200.
	 */
}

func main() {
	x = 0
	var wg sync.WaitGroup
	wg.Add(1)
	go incrementor(&wg)
	fmt.Println(x)
	wg.Add(1)
	go incrementor(&wg)
	fmt.Println(x)
	wg.Wait()
	fmt.Println(x)
}