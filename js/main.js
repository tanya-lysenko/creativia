document.addEventListener('click', function (e) {
    if (e.target.href === '#' || e.target.closest(`[href="#"]`)) e.preventDefault();
});

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menuList = document.querySelector('#header nav ul');

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

document.addEventListener('click', function (e) {
    const currentSpoiler = e.target.closest('details.card');
    const spoilers = document.querySelectorAll('details.card');

    if (currentSpoiler) {
        for (let spoiler of spoilers) {
            if (spoiler !== currentSpoiler) {
                spoiler.removeAttribute('open');
            }
        }
    } else {
        for (let spoiler of spoilers) {
            spoiler.removeAttribute('open');
        }
    }
});