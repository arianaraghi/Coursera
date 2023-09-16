// Smooth Scroll

$('#page header nav ul li a').click(function(){
    const thisSection = $(this).attr('href');
    const thisLink = $(this);

    $('html, body').stop().animate({
        scrollTop: $(thisSection).offset().top - 101
    }, 600, 'easeOutCirc');
    return false;
});

// Flexslider

$(window).on('load',function(){
    $('.flexslider').flexslider({
        animation: 'slide',
        slideshowSpeed: 2000,
        pauseOnHover: true
    });
});


// Tabs

$('#tabs > ul > li > a').click(function(){
    $('#tabs > ul > li > a').css({background: 'var(--tea-green)'});
    $(this).css({background: 'var(--tea-green-light'});
    const thisTab = $(this).attr('href');
    $('#tabs > div:visible').fadeOut(5, function(){
        $(thisTab).fadeIn(5); 
    });
    
});

// Content Rotator

let counter = 1;

function contentRotator(){
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(600, function(){
        if($(this).is('#rotator blockquote:last-child')){
            setTimeout(function(){
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(600, function(){
                    counter = 1;
                    contentRotator();
                })
            }, 5000);
        }
        else{
            setTimeout(function(){
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(600, function(){
                    counter++;
                    contentRotator();
                })
            }, 5000);
        }
        
    });
}


contentRotator();

// Features Rotator 

// $(window).on('load', function(){

//     const featureCount = $('#features ul:first-of-type li').length;
//     const featureHeight = $('#features ul li').first().height();
//     const totalHeight = (featureCount * featureHeight) + 'px';

//     let counter = 0;
//     let topPosition = 0;

//     $('#features ul').css('height', totalHeight);

//     let timer = setInterval(nextFeature, 2000);

//     document.getElementById('feature-container').addEventListener('mouseover', function(){
//         clearInterval(timer);
//     });

//     document.getElementById('feature-container').addEventListener('mouseout', function(){
//         timer = setInterval(nextImage, 1500);
//     })

//     function nextFeature(){
//         counter++;
//         if(counter === featureCount){
//             $('#features ul:first-of-type').clone().appendTo('#features');
//             $('#features ul').last().css('top', featureHeight+'px');
            
//             topPosition = `-${totalWidth}`;
//             $('#features ul').last().animate({top:0}, 500, 'easeInQuad');
//             $('#features ul').first().animate({top: topPosition}, 500, 'easeInQuad', function(){
//                 $('#features ul').first().remove();
//             });

//             counter = 0;
//         }
//         else{
//             topPosition = `-${counter * featureHeight}px`;
//             $('#features ul').animate({top: topPosition}, 500, 'easeInQuad');
//         // }
//     }

// });
