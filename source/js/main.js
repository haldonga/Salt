$(document).ready(function (){
    $('.slider').slick({
        vertical: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 1000,
        arrows: false,
        slidesToShow: 1
    })
});
$(document).ready(function (){
    $('.header__head--burger').click(function (event){
        $('.container, .header__container--head,.header__head--navbar,.header__head--burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__navbar--link').click(function (event){
        $('.container, .header__container--head,.header__head--navbar,.header__head--burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
function smothscroll(element) {
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
window.onload=function(){
    var button_1 = document.querySelector('.text__button--btn');
    var button_2 = document.querySelector('.more__button--btn');
    var button_3 = document.querySelector('.content__button--btn');
    var page_1 = document.querySelector('#about');
    var page_2 = document.querySelector('#form');
    button_1.addEventListener('click', ()=> {
        smothscroll(page_1);
    })
    button_2.addEventListener('click', ()=> {
        smothscroll(page_1);
    })
    button_3.addEventListener('click', ()=> {
        smothscroll(page_2);
    })
}
if(window.onload){
    let body = document.getElementsByTagName('body');
    delete body;
}

