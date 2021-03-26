document.addEventListener('click', function (e) {
    if (e.target.href === '#' || e.target.closest(`[href="#"]`)) e.preventDefault();
});

const
    menuOpen = document.querySelector('.menu-open'),
    menuClose = document.querySelector('.menu-close'),
    menuList = document.querySelector('#header nav ul')
;

menuOpen.addEventListener('click', function (e) {
    menuOpen.hidden = true;
    menuClose.hidden = false;
    menuList.hidden = false;
});

menuClose.addEventListener('click', function (e) {
    menuOpen.hidden = false;
    menuClose.hidden = true;
    menuList.hidden = true;
});