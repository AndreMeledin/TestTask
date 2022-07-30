function openNav() {
    document.getElementById("myNav").style.height = "100%";
}  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

let animItems = document.querySelectorAll('._anim-items');

if (animItems.length >0){
    window.addEventListener("scroll",animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <(animItemOffset + animItemHeight)){
               
                animItem.classList.add("_active");
            } else{
                 if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove("_active");
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);  
}

let popupBg = document.querySelector('.popup');
let popup = document.querySelector('.popup__content');
let openPopupButtons = document.querySelectorAll('#openModal'); 
let closePopupButton = document.querySelector('.popup__close');
let body = document.getElementsByTagName("body"); 

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active');
        body.style.overflowY = "hidden";
    });
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});