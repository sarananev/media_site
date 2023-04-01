//  ハンバーガーメニューをクリックした時の処理
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navi = document.getElementById('nav');
const mask = document.getElementById('mask');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navi.classList.toggle('active');
  mask.classList.toggle('active');
});

// slick
$(document).ready(function(){
  $('.slick-slider').slick({
//    setting-name: setting-value
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '100px',
    responsive:[
      {
        breakpoint: 768,
        settings:{
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});

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
	