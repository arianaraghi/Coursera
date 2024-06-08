use std::io;

fn main() {
    println!("Hello, world!");
    
    let message = "This is a message";

    let mut message2 = String::from("Second message!");
    println!("{}", message2);

    message2 = String::from("Changed second!");
    println!("{}", message2);


    let weight = 150.0;

    let mut kilos = weight/2.2;

    let mut num = 45;

    println!("{} Kilos is {} {}", message, kilos, num);

    kilos = 20.0;
    num = 20;

    println!("Kilos is {} {}", kilos, num);

    // let fat = if kilos > 50.0 {true} else {false};

    diff_loops();

}

fn diff_loops(){

    // let mut x = 0;

    // Kind of a While True
    // loop{

    //     x+=1;
    //     if x == 2 {continue}

    //     println!("{}", x);

        
    //     if x > 4 {break}
    // }

    // x=0;

    let mut input = String::new();
    while input.trim() != "stop"{
        input.clear();
        println!("Give me your next input: \n");
        io::stdin().read_line(&mut input).expect("Failed to read input!");
    }
    // for x in range(0, 10){
    //     if x % 2 ==0{
    //         println!("even")
    //     }
    //     else{
    //         println!("odd {}", x)
    //     }
    // }
}

