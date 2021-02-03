const menu_fixed = document.querySelector('.menu');
const logo_image = document.querySelector('.logo_image');
const header = document.querySelector('header');
const isMobile = document.querySelector('#menu_icon_container');
let isFixed = true;

if (document.documentElement.clientWidth > 753) {
    window.addEventListener('scroll', fixMenu)
}


function fixMenu() {
    const elemPos = menu_fixed.getBoundingClientRect();
    const scrollToElem = elemPos.y + 100;
    const windowHeight = document.documentElement.clientHeight;
    if(pageYOffset > 100) {
        if(!isFixed) return;
        isFixed = false;
        logo_image.style = 'width: 150px; margin-top: 4px;';
        header.style = 'height: 70px; position: fixed; top: 0; left: 0; right: 0;';
        menu_fixed.style = 'position: fixed; top: 70px; z-index: 90;';

        return;
    } 
    isFixed = true;
    logo_image.style = '';
    header.style = '';
    menu_fixed.style = '';
}