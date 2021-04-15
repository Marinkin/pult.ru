new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    // бесконечный слайдер
    loop: true,
    // автопрокрутка
    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: false
    }
});


let menuItems = document.querySelectorAll('.menu__item');
let menuBox = document.querySelector('.menu__img');


for (i = 0; i < menuItems.length; i++) {
    menuItem = menuItems[i];
    menuItem.addEventListener('mouseover', mouseoverHandler);
    menuItem.addEventListener('mouseout', mouseoutHandler);
}

function mouseoverHandler(evt) {
    evt.preventDefault();
    this.classList.add('active');
    menuBox.src = this.dataset.image;
}

function mouseoutHandler() {
    this.classList.remove('active');
}