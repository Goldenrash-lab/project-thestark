import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const li = document.getElementsByClassName("test");
console.log(li);

// window.addEventListener('resize', function () {
//   if (window.innerWidth <= 1279) {
//     // 0...768
//     li.classList.add('class-name');
//   } else {
//     // 769...Inf
//     li.className.remove('class-name');
//   }
// });




document.addEventListener('DOMContentLoaded', () => {

 const swiper = new Swiper('.swiper', {
  modules: [Pagination],
   pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
   autoplay: true,
      speed: 400,
      breakpoints: {
        1279: {
          slidesPerView: 2,
          spaceBetween: 20,
    }
  }
  
});

})


const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();