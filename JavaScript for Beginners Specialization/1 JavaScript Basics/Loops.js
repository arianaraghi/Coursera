for( var i=0; i<10; i++){
	console.log(i);
}

//-------------------------------------------------------//

var colors = ['red', 'green', 'blue', 'yellow', 'pink','orange','purple'];

for (var i = 0; i<colors.length; i++){
	console.log(colors[i]);
}

//------------------------------------------------------//

for(var color of colors){
	console.log(color);
}

//------------------------------------------------------//

var i= 0;
text = '';
while (i< 10){
	text += `The incrementor has gone up to ${i}, and ${i**2+1} \n`
	i++;
}
console.log(text)
