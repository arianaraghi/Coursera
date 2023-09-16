$(window).on('load', function(){
    'use strict';
    
    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageCount * imageWidth) + 'px';

    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);

    let timer = setInterval(nextImage, 1500);

    document.getElementById('slider').addEventListener('mouseover', function(){
        clearInterval(timer);
    });

    document.getElementById('slider').addEventListener('mouseout', function(){
        timer = setInterval(nextImage, 1500);
    })

    function nextImage(){
        counter++;
        if(counter === imageCount){
            $('#slider ul').clone().appendTo('#slider');
            $('#slider ul').last().css('left', imageWidth+'px');
            
            leftPosition = `-${totalWidth}`;
            $('#slider ul').last().animate({left:0}, 500, 'easeInQuad');
            $('#slider ul').first().animate({left: leftPosition}, 500, 'easeInQuad', function(){
                $('#slider ul').first().remove();
            });

            counter = 0;
        }
        else{
            leftPosition = `-${counter * imageWidth}px`;
            $('#slider ul').animate({left: leftPosition}, 500, 'easeInQuad');
        }
    }

    // $('#next').click(function(){
    //     counter++;
    //     if(counter === imageCount){
    //         //cloning
    //         $('#slider ul').clone().appendTo('#slider');
    //         $('#slider ul').last().css('left', imageWidth+'px');
            
    //         leftPosition = `-${totalWidth}`;
    //         $('#slider ul').last().animate({left:0}, 500, 'easeInQuad');
    //         $('#slider ul').first().animate({left: leftPosition}, 500, 'easeInQuad', function(){
    //             $('#slider ul').first().remove();
    //         });

    //         counter = 0;
    //     }
    //     else{
    //         leftPosition = `-${counter * imageWidth}px`;
    //         $('#slider ul').animate({left: leftPosition}, 500, 'easeInQuad');
    //     }
    // });

    // $('#previous').click(function(){
    //     counter--;
    //     if(counter < 0){
    //         counter = imageCount-1;
    //         $('#slider ul').clone().appendTo('#slider');
    //         $('#slider ul').last().css('left', `-${totalWidth}`);
            
    //         leftPosition = `-${counter*imageWidth}px`;
    //         $('#slider ul').last().animate({left:leftPosition}, 500, 'easeInQuad');
    //         $('#slider ul').first().animate({left: `${imageWidth}px`}, 500, 'easeInQuad', function(){
    //             $('#slider ul').first().remove();
    //         });
    //     }
    //     else{
    //         leftPosition = `-${counter*imageWidth}px`;
    //         $('#slider ul').animate({left: leftPosition}, 500, 'easeInQuad');
    //     }
    // });
});