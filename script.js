// Hamburger open and close functionality
const menuOpen = document.querySelector('.sidebar-hamburger');
const menuClose = document.querySelector('.sidebar-menu-close');
const sidebar = document.querySelector('#sidebar');

menuOpen.addEventListener('click', () => {
    sidebar.style.display = 'flex';
})

menuClose.addEventListener('click', () => {
    sidebar.style.display = 'none';
})