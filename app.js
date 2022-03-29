// Header Menu
let OpenButton = document.querySelector('.open-btn')
let CloseButton = document.querySelector('.close-btn')
let MobileNav = document.querySelector('.mobile-nav-wrapper')

function OpenNavigation(){
    MobileNav.style.width = '30%';
}
function CloseNavigation(){
    MobileNav.style.width = '0%';
}


// Search Menu
let OpenButton2 = document.querySelector('.open-btn2')
let CloseButton2 = document.querySelector('.close-btn2')
let SearchNav = document.querySelector('.mobile-search-wrapper')

function OpenNavigation2(){
    SearchNav.style.width = '100%';
}
function closeNavigation2(){
    SearchNav.style.width = '0%';
}


// Slide Menu
const openBtn = document.querySelector('.open-btn')
const sideMenu = document.querySelector('.slide-menu')

openBtn.addEventListener('click', function(){
sideMenu.classList.toggle('active')
})


// Coler Menu
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')

const heroText = document.querySelector('.herojs')
const bannerBtn = document.querySelector('.hero-btn')
const bannerText = document.querySelector('.bnr')
const bodyTag = document.querySelector('body')
const headerBtn = document.querySelector('.h-btn')
const searchBtn = document.querySelector('.Open-btn2')


btn1.addEventListener('click', function(){
bodyTag.style.backgroundColor = 'green'
heroText.style.color = 'white'
bannerBtn.style.backgroundColor = 'white'
bannerText.style.color = 'black'
headerBtn.style.color = 'black'
searchBtn.style.backgroundColor = 'green'
})

btn2.addEventListener('click', function(){
    bodyTag.style.backgroundColor = 'yellow'
    heroText.style.color = 'white'
    bannerBtn.style.backgroundColor = 'white'
    bannerText.style.color = 'black'
    headerBtn.style.color = 'black'
    searchBtn.style.backgroundColor = 'yellow'
    })

btn3.addEventListener('click', function(){
    bodyTag.style.backgroundColor = 'rebeccapurple'
    heroText.style.color = 'white'
    bannerBtn.style.backgroundColor = 'white'
    bannerText.style.color = 'black'
    headerBtn.style.color = 'black'
    searchBtn.style.backgroundColor = 'rebeccapurple'
     })

btn4.addEventListener('click', function(){
    bodyTag.style.backgroundColor = 'blue'
    heroText.style.color = 'white'
    bannerBtn.style.backgroundColor = 'white'
    bannerText.style.color = 'black'
    headerBtn.style.color = 'black'
    searchBtn.style.backgroundColor = 'blue'
     })


// Header background
     $(window).scroll(function(){
     var scrollPosition = $(this).scrollTop();
     if(scrollPosition > 100){
     $('.header').addClass('bg');
     }
    else{
     $('.header').removeClass('bg')
     }

          $(window).on('load', function(){
         $('.preloader').delay(500).fadeOut(500);
     });
    
    });