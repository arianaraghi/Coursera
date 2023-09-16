$('nav ul li a').click(function(){
    const thisSection = $(this).attr('href');
    const thisLink = $(this);

    $('html, body').stop().animate({
        scrollTop: $(thisSection).offset().top - 200
    }, 600, 'easeOutCirc', function(){
        $('nav ul li a').removeAttr('class');
        thisLink.addClass('selected');
    });
    return false;
});

$(window).on('load', function(){
    const allLinks = $('nav ul li a');
    let posts = $('section');
    let pageTop;
    let counter = 0;
    let prevCount = 0;
    let doneResize;

    let postTops = [];
    resetPagePos();

    $(window).scroll(function(){
        pageTop = $(window).scrollTop() + 210;
        if(pageTop > postTops[counter + 1]){
            counter++;
            
        
        } else if(counter > 0 && pageTop < postTops[counter]){
            counter--;

        }
        if (counter != prevCount){
            $(allLinks).removeAttr('class');
            $('nav ul li a').eq(counter).addClass('selected');
            prevCount = counter;
        }
    });

    $(window).on('resize', function(){
        clearTimeout(doneResize);

        doneResize = setTimeout(function(){
            resetPagePos();
        }, 500);
    });

    function resetPagePos(){
        postTops = [];
        posts.each( function(){
            postTops.push(Math.floor($(this).offset().top));
        });

        let pagePosition = $(window).scrollTop() + 210;
        counter = 0;

        for(let i=0; i<postTops.length;i++){
            if(pagePosition > postTops[i]){counter++;}
        }
        counter--;

        $(allLinks).removeAttr('class');
        $('nav ul li a').eq(counter).addClass('selected');
    }
});