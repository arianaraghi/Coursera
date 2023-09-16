// JavaScript goes here

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(eachLink => {
    eachLink.addEventListener('click', smoothScroll);
});

function smoothScroll(event){
    event.preventDefault();

    const targetID = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetID);

    //console.log(targetSection.getBoundingClientRect().top);

    const originalTop = Math.floor(targetSection.getBoundingClientRect().top) - 200;

    window.scrollBy({top: originalTop, left: 0, behavior: 'smooth'});
}

window.addEventListener('load', function(){
    const posts = document.querySelectorAll('section');
    let postTops = [];
    let pageTop;
    let counter = 1;
    let prevCount = 1;
    let doneResize;

    resetPagePosition();

    window.addEventListener('scroll', function(){
        pageTop = window.pageYOffset;
        if (pageTop > postTops[counter]){
            counter++;
        }
        else if (counter > 1 && pageTop < postTops[counter-1]){
            counter--;
        }
        if (counter != prevCount){
            navLinks.forEach(eachLink =>{
                eachLink.removeAttribute('class');
            });
            const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
            thisLink.className = 'selected';

            prevCount = counter;
        }
    });

    window.addEventListener('resize', function(){
        this.clearTimeout(doneResize);

        doneResize = this.setTimeout(function(){
            resetPagePosition();
        }, 500);
    });

    function resetPagePosition(){
        postTops = [];

        posts.forEach(function(post){
            postTops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset));
        });

        const pagePosition = window.pageYOffset + 210;
        counter = 0;

        postTops.forEach(function(post){ if(pagePosition>post){counter++;}});
        navLinks.forEach(eachLink =>{eachLink.removeAttribute('class');});
        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
        thisLink.className = 'selected';
    }

})