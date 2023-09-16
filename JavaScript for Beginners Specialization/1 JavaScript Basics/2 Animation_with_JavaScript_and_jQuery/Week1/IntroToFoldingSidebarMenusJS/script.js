(function(){
    'use strict';
    
    hidesSubMenus();
    const menulinks = document.querySelectorAll('.menulink');
    for(let i=0; i<menulinks.length;i++){
        menulinks[i].addEventListener('click', function(event){
            event.preventDefault();
            const thisMenu = this.parentNode.querySelector('ul');
            if(thisMenu.classList.contains('hide-menu')){
                hidesSubMenus();
                thisMenu.className = 'show-menu';
            }
            else{ //if (thisMenu.classList.contains('show-menu')){
                thisMenu.className = 'hide-menu';
            }
        });
    }

    function hidesSubMenus(){
        const submenus = document.querySelectorAll('ul li ul');

        for (let i=0;i<submenus.length;i++){
            submenus[i].className = 'hide-menu';
        }
    }
})();