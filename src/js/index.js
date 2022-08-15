import * as $ from 'jquery';
import {
  createYouTubeEmbedLink,
  rememberCatalogContent,
  toggleModal,
  OutsideClick,
  pageUp,
  toggleModalCatalog,
  accordion,
  fillCatalogContent,
  getFooterModal,
  scrollToMap,
  closeBitrixForm,
  owlGallery,
  plusSlide,
  minusSlide
} from '../vendors/js/general';
//import "../scss/style.scss";
import '../scss/index.scss';

function declOfNum(n, text_forms) {
  if (n > 5 || n == 0) {
    return text_forms[0];
  }
  if (n > 1 && n < 5) {
    return text_forms[2];
  }
  if (n == 1) {
    return text_forms[1];
  }
  return text_forms[3];
}

const loadNews = (loadBtn, newsBlock) => {
  const postsCount = $(newsBlock).children().length;
  let showPosts = 3;

  if (postsCount > 3 && postsCount > showPosts) {
    $(newsBlock).children().slice(3).hide();

    $(loadBtn).on('click', () => {
      $(newsBlock).children().slice(showPosts).show();

      showPosts += 3;
      if (postsCount < showPosts) {
        $(loadBtn).hide();
      }
    });
  }
};
document.title = 'Torex Premium';

const countNews = () => {
  const count = $('.news__count');
  const post = $('.post');
  const word = declOfNum(post.length, ['новостей', 'новость', 'новости']);

  if (count.length) {
    count.text(`${post.length} ${word}`);
  }
};





function addClassSlider(){
  const slider = document.querySelector('.city-slider');
  const container = slider.querySelector('.city-slider__wrapper');
  let itemsAddClass = container.firstElementChild.firstElementChild.firstChild.children;
  console.log(itemsAddClass);
  for(let i = 0; i < itemsAddClass.length; i++){
    console.log(itemsAddClass[i]);
    itemsAddClass[i].classList.add('ct-slider__item');
  }
}
function numberSlideIndex(direction, classSlider, classNumber) {
  const slider = document.querySelector(`${classSlider}`);
  const items = document.querySelectorAll('.ct-slider__item');
  // items = slider.querySelectorAll(`${classSlider} .owl-item`);
  const number = document.querySelector(classNumber);
  let num;
  if (items) {
    num = items.length;
  }

  let numActive = 1;
  for (var key in Object.keys(items)) {
    if (items[key].className === 'owl-item ct-slider__item active' && direction === 'right') {
      numActive = Number(key) + 1;
      break;
    }
    if (items[key].className === 'owl-item ct-slider__item active' && direction === 'left') {
      numActive = Number(key) + 1;
      break;
    }
  }
  let formattedNumActive = numActive.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  let formattedNum = num.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  console.log(formattedNum);
  if (number) {
    number.innerHTML = `${formattedNumActive}/${formattedNum}`;
  }
}
const plusSlideIndex = (classSlider, classNumber) => {
  $('.owl-next').on('click', function () {
    numberSlideIndex('right', classSlider, classNumber);
  });
};
const minusSlideIndex = (classSlider, classNumber) => {
  $('.owl-prev').on('click', function () {
    numberSlideIndex('left', classSlider, classNumber);
  });
};

$().ready(() => {
  createYouTubeEmbedLink($('.production__button'), $('.production__video'));

  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');
  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  OutsideClick('.modal', 'modal__active');
  //OutsideClick(".select", "", "data-state");
  // OutsideClick('.menuCatalog');

  closeBitrixForm();

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  loadNews('.news__button', '.posts');

  rememberCatalogContent('.product[data-content]');
  //rememberCatalogContent(".horTab[data-content]");

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  countNews();

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();

  getFooterModal();

  // owlGallery('.city-slider__items', {
  //   nav: true,
  //   navContainer: '.modal__buttons',
  //   loop: false,
  //   rewind: true,
  //   dots: false,
  //   mouseDrag: false,
  //   touchDrag: false,

  //   // margin: 11,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     500: {
  //       items: 1,
  //       nav: true
  //     },
  //     700: {
  //       items: 1,
  //       nav: true
  //     },
  //     800: {
  //       items: 1,
  //       nav: true
  //     },
  //     1000: {
  //       items: 1,
  //       nav: true
  //     }
  //   }
  // });
  // addClassSlider('.city-slider');
  // numberSlideIndex('right', '.city-slider', '.modal__date');
  // plusSlideIndex('.city-slider', '.modal__date');
  // minusSlideIndex('.city-slider', '.modal__date');
  // owlGallery('.city-image__slider', {
  //   nav: false,
  //   navContainer: '.city-image__nav',
  //   loop: false,
  //   rewind: false,
  //   dots: true,

  //   // margin: 11,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     500: {
  //       items: 1,
  //       nav: true
  //     },
  //     700: {
  //       items: 1,
  //       nav: true
  //     },
  //     800: {
  //       items: 1,
  //       nav: true
  //     },
  //     1000: {
  //       items: 1,
  //       nav: true
  //     }
  //   }
  // });
});
