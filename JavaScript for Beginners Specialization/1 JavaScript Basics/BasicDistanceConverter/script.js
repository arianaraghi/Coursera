(function(){
	'use strict';
	document.getElementById('convert').addEventListener('submit', function(event){
		event.preventDefault();
		const distance = parseFloat(document.getElementById('distance').value);
		
		if(distance){
			const distanceByKilometer = (Math.round(parseFloat(distance) * 1.609344 *1000))/1000;
			const answer = document.getElementById('answer');
			answer.innerHTML = `<h2>${distanceByKilometer}</h2>`;
		}else{
			alert('you didn\'t input a number');
		}

	})
})();