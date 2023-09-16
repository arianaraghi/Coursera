(function(){
	'use strict';

let convertType = 'miles';
const heading = document.querySelector('h1');
const intro = document.querySelector('p');
const answerDiv = document.getElementById('answer');
const form = document.getElementById('convert');

window.addEventListener('keydown', function(event){
	
	if(event.key == 'm'){
		convertType = 'miles';
		heading.innerText = 'Miles to Kilometers Converter';
		intro.innerText = 'Type in a number of miles and click the button to convert the distance to kilometers.';
	}
	else if(event.key == 'k'){
		convertType = 'kilometers';
		heading.innerText = 'Kilometers to Miles Converter';
		intro.innerText = 'Type in a number of kilometers and click the button to convert the distance to miles.';
	}
});
form.addEventListener('submit', function(event){
	event.preventDefault();
	const distance = parseFloat(document.getElementById('distance').value);
	if(convertType == 'miles'){				
		if(distance){
			const distanceByKilometer = (Math.round(parseFloat(distance) * 1.609344 *1000))/1000;
			answerDiv.innerHTML = `<h2>${distanceByKilometer}</h2>`;
		}else{
			alert('you didn\'t input a number');
		}
	}
	else if (convertType == 'kilometers'){
		if(distance){
			const distanceByMiles = (Math.round(parseFloat(distance)*1000 / 1.609344))/1000;
			answerDiv.innerHTML = `<h2>${distanceByMiles}</h2>`;
		}else{
			alert('you didn\'t input a number');
		}
	}
});
})();