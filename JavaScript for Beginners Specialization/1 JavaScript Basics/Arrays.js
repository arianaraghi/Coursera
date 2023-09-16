var colors = new Array("red", "green", "blue");
var colours = ["red", "green", "blue"];

console.log(colors,'\n', colours, '\n', colors[2], '\n', colours.length)
console.log(typeof(colors), '\n', typeof(colours));

//----------------------------------------------------------//

var vehicles = ["Ford", 'Honda', 'Toyota'];
var Vehicles = ['Ford', ['Fiesta', 'Taurus', 'Explorer'],
				'Honda', 'Toyota', ['Corolla', ['Camry', 'Prius']]];

console.log(Vehicles[1], Vehicles[4][1][0]);

var joke = "The chicken crossed the road";
console.log(joke[4], joke.length, joke.charAt(4))

//-----------------------------------------------------------//

vehicles.push('Mercedess');
console.log(vehicles);

vehicles.splice(0, 1);
console.log(vehicles);

vehicles.push('Ford');
vehicles.sort();
console.log(vehicles);

//-----------------------------------------------------//
