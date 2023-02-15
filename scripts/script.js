import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

function initSlider() {
    const swiper = new Swiper('.swiper', {
        slideNextClass: 'button-next',
        slidePrevClass: 'button-prev',
    
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },

        effect: 'coverflow',
        coverflowEffect: {
        rotate: 30,
        slideShadows: false,
        },

        autoplay: {
            delay: 5000,
          },
    });
}

function scrollToOrderForm() {
    let scrollDiv = document.getElementById('footer').offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}



function initOnClickEventForOrderButton() {
    // Возвращает список всех узлов элемента
    let buttons = document.querySelectorAll('.orderButton'); 
    

    buttons.forEach(function(element) {
        // Регистрирует обработчик событий для определённого типа событий в элементе
        element.addEventListener("click", function() {
            scrollToOrderForm();
        });
    })  
} 


initSlider();

initOnClickEventForOrderButton();



