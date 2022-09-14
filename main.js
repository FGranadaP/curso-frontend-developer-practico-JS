const burguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    // if(desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // }else{
    //     desktopMenu.classList.add('inactive');
    // }
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');   
}

function toggleCarritoAside(){
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    aside.classList.toggle('inactive');   
}


