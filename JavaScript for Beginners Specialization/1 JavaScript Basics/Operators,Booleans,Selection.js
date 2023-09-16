var happy = true;

if(happy){
	console.log(true);
} else {
	console.log(false);
}

//-------------------------------------------------------//

var green;
if(green){
	console.log(true);
} else {
	console.log(false);
}

//--------------------------------------------------------//

var myNum = 5;
var myOtherNum = 6;
var notNum= '5'
//only value
if(myNum == notNum){
	console.log(true);
} else {
	console.log(false);
}
//type
if(myNum === notNum){
	console.log(true);
} else {
	console.log(false);
}

//-------------------------------------------------//

if (myNum == notNum){
console.log('equal');
} else if (myNum != myOtherNum) {
console.log('nq')
} else {
console.log(false)
}

//----------------------------------------------------//

colors = ['red', 'green', 'blue', 'yellow'];
var selectedColor = 'n';

switch(selectedColor){
	case 'red': console.log('red'); break;
	case 'blue': console.log('blue'); break;
	case 'green': console.log('green'); break;
	case 'yellow': console.log('yellow');
	default: console.log('Nothing');
}

//------------------------------------------------------//

var goodMood = true;
var gotSleep = false;

if (goodMood && gotSleep){
	console.log('happy');
} else{
	console.log('sad');
}