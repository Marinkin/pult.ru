(()=>{"use strict";new Swiper(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0},grabCursor:!0,loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!0,disableOnInteraction:!1}});for(var e=document.querySelectorAll(".menu__item"),t=document.querySelector(".menu__img"),i=0;i<e.length;i++){var a=e[i];a.addEventListener("mouseover",n),a.addEventListener("mouseout",s)}function n(e){e.preventDefault(),this.classList.add("active"),t.src=this.dataset.image}function s(){this.classList.remove("active")}})();