import * as $ from 'jquery';
import {
  plusSlide,
  minusSlide,
  numberSlide,
  owlGallery,
  toggleModal,
  pageUp,
  OutsideClick,
  openModalCatalog,
  accordion,
  fillCatalogContent
} from '../vendors/js/general';

import '../scss/newDetail.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export function backPage(btn) {
  $(btn).on('click', function () {
    parent.history.back();
    return false;
  });
}

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');
  toggleModal('.menu__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');
  toggleModal('.menuCatalog__city_btn', '.choiceCity', 'choiceCity__active', '.choiceCity__close');
  toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.menuCatalog');

  fillCatalogContent();

  openModalCatalog('.menu__openCatalog');
  openModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  owlGallery('.gallery__carousel', {
    nav: true,
    navContainer: '.gallery__controls',
    loop: false,
    rewind: true,
    dots: false,

    margin: 11,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1,
        nav: false
      },
      700: {
        items: 1,
        nav: false
      },
      800: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });
  numberSlide('right', '.gallery', '.gallery__number-slide');
  plusSlide('.gallery', '.gallery__number-slide');
  minusSlide('.gallery', '.gallery__number-slide');
  backPage('.new__backBtn');
  backPage('.new__close');

  pageUp();
});
