function doStuff(){
	var t1 = 'mEssage';
	var t2 = t1.toUpperCase();

	console.log(t2);
}
doStuff();

//--------------------------------------------------------//

function upperMessage(message){
	console.log(message.toUpperCase());
}
upperMessage('ksls');

function sum(num1, num2){
	console.log(num1+num2);
}
sum(12, 243);

function returnSum(num1, num2){
	return num1 + num2;
}
console.log(returnSum(12, 232));

//--------------------------------------------------------//

console.log(Math.random());

function randomNum(start, end){
	interval = end - start + 1;
	return Math.floor(start + interval* Math.random());
}

console.log(randomNum(1,5));

//-------------------------------------------------------//

var func = function(num1){
	var name = 'whhhhhaaaaat';
	console.log(`can it happen ${name} and ${num1}`);
}

func(12);

var arrowFunc = num1 => console.log(`it is a number ${num1}`);

arrowFunc(98);

