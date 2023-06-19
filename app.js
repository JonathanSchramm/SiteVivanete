/*---------navMobileFunction---------*/
function navMobile() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
    });
}

navMobile();
/*---------navMobileFunction---------*/

/*---------darkModeFunction---------*/
function darkMode() {
    const darkMode = document.querySelector('.dark');
    const bodyDarkMode = document.querySelector('.body-init');
    const colorDark = document.querySelector('.dark-mode');

    darkMode.addEventListener('click', () => {
        bodyDarkMode.classList.toggle('dark-active');
        colorDark.classList.toggle('darkColor-active');
        darkMode.classList.toggle('darkLightMode-active');
    });
}

darkMode();
/*---------darkModeFunction---------*/