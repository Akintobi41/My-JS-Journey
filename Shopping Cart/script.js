const icon_menu = document.querySelector('.icon-menu');
const icon_close = document.querySelector('.icon-close');

const menuToggle = document.querySelector('.menu-Toggle')
console.log(menuToggle)

icon_menu.addEventListener('click', (e) => {
    icon_menu.classList.toggle('active')
    icon_close.classList.toggle('active')
})