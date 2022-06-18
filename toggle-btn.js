const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-list__item');

function switchMenu() {
    toggleBtn.classList.toggle('collapsed');
    nav.classList.toggle('collapsed');
    navList.classList.toggle('collapsed');
}

function closeMenu() {
    setTimeout(() => {
        toggleBtn.classList.remove('collapsed');
        nav.classList.remove('collapsed');
        navList.classList.remove('collapsed');
    }, 500);
}

toggleBtn.addEventListener('click', switchMenu);
navItems.forEach(item => item.addEventListener('click', closeMenu));