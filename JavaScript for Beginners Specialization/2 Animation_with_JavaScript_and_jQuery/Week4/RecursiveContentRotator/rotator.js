(function(){
	"use strict";
	
	
	let counter = 1;

	function contentRotator(){
		//TO-DO
		$(`#container p:nth-child(${counter})`).fadeIn(1000, function(){
			if($(this).is('#container p:last-child')){
				setTimeout(function(){
					$(`#container p:nth-child(${counter})`).fadeOut(1000, function(){
						counter = 1;
						contentRotator();
					})
				}, 2000);
			}
			else{
				setTimeout(function(){
					$(`#container p:nth-child(${counter})`).fadeOut(1000, function(){
						counter++;
						contentRotator();
					})
				}, 2000);
			}
			
		});
	}


	contentRotator();

}());
