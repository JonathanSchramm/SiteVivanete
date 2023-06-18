function navMobile() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
    });
}

navMobile();