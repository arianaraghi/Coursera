var t1 = "I am really hungry for some";
var t2 = t1.toUpperCase();
var t3 = t1.toLowerCase();

console.log(t1, '\n', t2, '\n', t3);

//--------------------------------------------------------//

var reallyLoc = t1.search('really');
console.log(reallyLoc);

var specialWord = t1.substr(reallyLoc, 6);
console.log(specialWord);

specialWord = specialWord.toUpperCase();

var t4 = t1.replace('really', specialWord);
console.log(t4);

//--------------------------------------------------//

var foods = ['orange', 'apple', 'cheese', 'pie'];
console.log(`${t1} ${foods}`);

for (var food of foods){
	console.log(`${t1} ${food}`);
}

//-------------------------------------------------------//

for (var i=0; i<foods.length;i++){
	if (i % 2 === 0){
		console.log(`${t1} ${foods[i].toUpperCase()}`);
	} else{
		console.log(`${t1} ${foods[i].toLowerCase()}`);
	}
}

//------------------------------------------------//
