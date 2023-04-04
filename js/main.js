//  ハンバーガーメニューをクリックした時の処理
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navi = document.getElementById('nav');
const mask = document.getElementById('mask');
const header = document.getElementById('header');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navi.classList.toggle('active');
  mask.classList.toggle('active');
});

// #maskのエリアをクリックした時にメニューを閉じる
navi.addEventListener('click',() => {
  navi.classList.toggle('active');
  mask.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3.5,
      spaceBetween: 60,
      centeredSlides: true,
      loop: true,
      loopAdditionalSlides: 1,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },   
    },
  },
});

// slick
// $(document).ready(function(){
//   $('.slick-slider').slick({
// //    setting-name: setting-value
//     arrows: false,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: '100px',
//     responsive:[
//       {
//         breakpoint: 768,
//         settings:{
//           centerPadding: '50px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });

// フェードインの実装
// let fadeInTarget = document.querySelectorAll('.fade-in');
// window.addEventListener('scroll', () => {
//   for (let i = 0; i < fadeInTarget.length; i++){
//     const rect = fadeInTarget[i].getBoundingClientRect().top;
//     const scroll = window.pageYOffset || document.documentElement.scrollTop;
//     const offset = rect + scroll;
//     const windowHeight = window.innerHeight; // 現在のブラウザの高さ
//     if (scroll > offset - windowHeight + 150) {
//       fadeInTarget[i].classList.add('scroll-in');
//     }
//   }
// });
// フェードインの実装
const fadeinTargets = document.querySelectorAll('.fade-in');
  window.addEventListener('scroll', () => {
    fadeinTargets.forEach((fadeinTarget) => {
      const rect = fadeinTarget.getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight;
      if (scroll > offset - windowHeight + 200){
        fadeinTarget.classList.add('scroll-in');
      }
  });
});
	
// スムーススクロールの実装
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  smoothScrollTrigger.forEach((smoothscroll) => {
    smoothscroll.addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothscroll.getAttribute('href');
      let targetElement = document.getElementById(href.replace('#',''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top:target,
        behavior:'smooth',
      });
    });
  });
