window.addEventListener('load', function(){
    'use strict';


    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalWidth = slideCount * slideWidth + 'px';

    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    let counter = 0;
    let leftPosition = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function(event){
        event.preventDefault();
        
        counter++;
        if(counter == slideCount){ counter = 0; }
        leftPosition = `-${counter*slideWidth}px`;
        slider.style.left = leftPosition;
    });

    prev.addEventListener('click', function(event){
        event.preventDefault();
        
        counter--;
        if(counter < 0){ counter = slideCount-1; }
        leftPosition = `-${counter*slideWidth}px`;
        slider.style.left = leftPosition;
    });
});