const burguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');


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

const productList =[]
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})

productList.push({
    name: 'Car',
    price: 5600,
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
})

productList.push({
    name: 'Control PS5',
    price: 200,
    image: 'https://images.pexels.com/photos/13310607/pexels-photo-13310607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

productList.push({
    name: 'Macbook Pro',
    price: 1100,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

productList.push({
    name: 'Xbox Series S',
    price: 1100,
    image: 'https://images.pexels.com/photos/12718988/pexels-photo-12718988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

function renderProducts(array){
    for (product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
       
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCart);
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImg,productInfo);
    
        cardContainer.append(productCard);
    }
}

renderProducts(productList);
