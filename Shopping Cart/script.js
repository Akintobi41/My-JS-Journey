const icon_menu = document.querySelector('.icon-menu'),
    icon_close = document.querySelector('.icon-close'),

    menuToggle = document.querySelector('.menu-Toggle'),
    nav = document.querySelector('nav'),

    next = document.querySelector('.next'),
    previous = document.querySelector('.previous'),
    product_image = document.querySelector('.product-1');


menuToggle.addEventListener('click', (e) => {
    icon_menu.classList.toggle('active')
    icon_close.classList.toggle('active')
    nav.classList.toggle('active')
})

// Image Slider

let slide = 0,
    img_collection =
        ['/Images/image-product-1.jpg', '/Images/image-product-2.jpg',
            '/Images/image-product-3.jpg', '/Images/image-product-4.jpg'];

next.addEventListener('click', () => {
    slide++;
    if (slide === img_collection.length) slide = 0;
    product_image.src = img_collection[slide];
})

previous.addEventListener('click', () => {
    slide--;
    if (slide < 0) slide = (img_collection.length - 1);
    product_image.src = img_collection[slide];
})
