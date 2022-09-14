const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    // if(desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // }else{
    //     desktopMenu.classList.add('inactive');
    // }
    desktopMenu.classList.toggle('inactive');   
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');   
}


