const button = document.querySelector('#menu_icon_container');
const menu = document.querySelector('.menu');
button.addEventListener('click', checkMenu);

(function() {
    const toggles = document.querySelectorAll(".c-hamburger");

    for (let i = toggles.length - 1; i >= 0; i--) {
      let toggle = toggles[i];
      toggleHandler(toggle);
    };
   
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        this.classList.toggle("is-active");
      });
    }
   
})();

function checkMenu(event) {
    event.preventDefault();
    if(menu.classList.contains('active-mobile-menu')) {
        closeMenu();
    } else {
        showMenu();
    }
}

function showMenu() {

    const menu_html = document.querySelector('.menu_ul');

    const menu = document.querySelector('.menu');
    menu.style.height = 0;
    menu.style.display = 'block';
    menu.classList.toggle('active-mobile-menu');
    let i = 0;
    let interval = setInterval(function() {
        if(i > 208) {
            clearInterval(interval);
            menu.style.height = '208px';
            menu.style = "display: block";
        } else {
            menu.style.height = i+'px';
            i+=5; 
        }
    }, 5);
    
}

function closeMenu() {  
    menu.classList.toggle('active-mobile-menu');
    let i = 208;
    let interval = setInterval(function() {
        if(i < 6) {
            clearInterval(interval);
            menu.style = "display: none";
        } else {
            menu.style.height = i+'px';
            i-=5; 
        }
    }, 5);
}