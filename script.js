//Open Menu function

const openMenuBtn =  document.getElementById('menu');
const closeMenuBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu(){
    mobileMenu.classList.remove('hidden');
}

function closeMenu(){
    mobileMenu.classList.add('hidden');
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

//Open Cart function

const cartDiv = document.getElementById('cartDiv');
const cartBtn = document.getElementById('cartBtn');

function cart(){
    cartDiv.classList.toggle('hidden');
}

cartBtn.addEventListener("click", cart);

//Add to cart and price calculation

const pricePerItem = 125; // Set the price per item here

function updateTotalPrice() {
    const currentQuantity = parseInt(quantity.innerHTML);
    totalPrice.innerHTML = "$" + (currentQuantity * pricePerItem).toFixed(2);
}

const increaseQuantity = document.getElementById('increaseQuantity');
const decreaseQuantity = document.getElementById('decreaseQuantity');
const quantity = document.getElementById('quantity');


function increase() {
   let currentQuantity = parseInt(quantity.innerHTML);
   quantity.innerHTML = currentQuantity + 1;
   updateTotalPrice();
}

increaseQuantity.addEventListener('click', increase);

function decrease() {
    let currentQuantity = parseInt(quantity.innerHTML);
    if(currentQuantity > 0) {
        quantity.innerHTML = currentQuantity - 1;
    }
    updateTotalPrice();
}

decreaseQuantity.addEventListener('click', decrease);

const addToCart = document.getElementById('addToCart');
const quantityInCart = document.getElementById('quantityCart');

const emptyCart = document.getElementById('emptyCartDiv');
const fullCart = document.getElementById('fullCartDiv');

const cartNotification = document.getElementById('cartNotification');


function toCart() {
    const currentQuantity = parseInt(quantity.innerHTML);
    quantityInCart.innerHTML = currentQuantity;

    if (currentQuantity > 0) {
        emptyCart.classList.add('hidden');
        fullCart.classList.remove('hidden');
        cartNotification.classList.add('flex');
        cartNotification.classList.remove('hidden');
        cartNotification.innerHTML = currentQuantity;
    } else {
        emptyCart.classList.remove('hidden');
        fullCart.classList.add('hidden');
    }
}

addToCart.addEventListener('click', toCart);

const deleteCartItem = document.getElementById('deleteCartItem');

function deleteCart(){
    fullCart.classList.add('hidden');
    fullCart.classList.remove('flex');
    emptyCart.classList.add('flex');
    emptyCart.classList.remove('hidden');
    cartNotification.classList.remove('flex');
    cartNotification.classList.add('hidden');
}

deleteCartItem.addEventListener('click', deleteCart);

const lightboxDiv = document.getElementById('lightboxDiv');
const lightboxOpen = document.getElementById('lightboxOpen');
const lightboxClose = document.getElementById('lightboxClose');

function lightbox(){
    lightboxDiv.classList.add('xl:flex');
    lightboxDiv.classList.toggle('xl:hidden');
}

lightboxOpen.addEventListener("click", lightbox);

function lightboxCloseFn(){
    lightboxDiv.classList.add('xl:hidden');
    lightboxDiv.classList.remove('xl:flex');
}

lightboxClose.addEventListener('click', lightboxCloseFn);

const lightboxImage = document.getElementById('lightboxImage');

const lightboxImage1 = document.getElementById('lightboxImage1');
const lightboxImage2 = document.getElementById('lightboxImage2');
const lightboxImage3 = document.getElementById('lightboxImage3');
const lightboxImage4 = document.getElementById('lightboxImage4');

function imageOne(){
    lightboxImage.src = "./images/image-product-1.jpg";
}

lightboxImage1.addEventListener('click', imageOne);

function imageTwo(){
    lightboxImage.src = "./images/image-product-2.jpg";
}

lightboxImage2.addEventListener('click', imageTwo);

function imageThree(){
    lightboxImage.src = "./images/image-product-3.jpg";
}

lightboxImage3.addEventListener('click', imageThree);

function imageFour(){
    lightboxImage.src = "./images/image-product-4.jpg";
}

lightboxImage4.addEventListener('click', imageFour);


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Initialize the first slide
showSlide(currentIndex);


//Lightbox carousel slider

document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.getElementById('carouselItems');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const closeButton = document.getElementById('lightboxClose');
    const lightboxDiv = document.getElementById('lightboxDiv');
    const openLightboxBtn = document.querySelector('.open-lightbox-btn');

    let currentIndex = 0;
    const items = carouselItems.children;
    const totalItems = items.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselItems.style.transform = `translateX(${offset}%)`;
    }

    function openLightbox() {
        lightboxDiv.classList.remove('hidden');
        lightboxDiv.classList.add('flex');
    }

    function closeLightbox() {
        lightboxDiv.classList.remove('flex');
        lightboxDiv.classList.add('hidden');
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    closeButton.addEventListener('click', closeLightbox);
    openLightboxBtn.addEventListener('click', openLightbox);

    const thumbnails = document.querySelectorAll('.xl\\:flex img');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            currentIndex = index;
            updateCarousel();
        });
    });
});


