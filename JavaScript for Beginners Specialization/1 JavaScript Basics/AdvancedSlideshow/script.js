(function(){
	"use strict";

	const images = ["slides/image1.jpg", "slides/image2.jpg",
	"slides/image3.jpg", "slides/image4.jpg", "slides/image5.jpg"];
	let currentImage = 0;
	const container = document.getElementById('content');
	const nextBtn = document.getElementById('next');
	const previousBtn = document.getElementById('previous');

	nextBtn.addEventListener('click', function(event){
		event.preventDefault();
		currentImage++;
		if (currentImage == images.length){
			currentImage = 0;
		}
		swapImage();
		
	});
	previousBtn.addEventListener('click', function(event){
		event.preventDefault();
		currentImage--;
		if (currentImage <0){
			currentImage = images.length-1;
		}
		
		swapImage();
	});

	function swapImage(){
		const newSlide = document.createElement('img');
		newSlide.src = images[currentImage];
		newSlide.className = 'fadeinimg';
		container.appendChild(newSlide);
		if(container.children.length > 2){
			container.removeChild(container.children[0]);
		}
	}
})();