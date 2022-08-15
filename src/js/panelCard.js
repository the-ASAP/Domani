import * as $ from 'jquery';
import {
  plusSlide,
  minusSlide,
  numberSlide,
  owlGallery,
  initTabs,
  pageUp,
  toggleModal,
  OutsideClick,
  toggleModalCatalog,
  accordion,
  fillCatalogContent,
  getFooterModal,
  scrollToMap,
  closeBitrixForm
} from '../vendors/js/general';
import '../scss/panelCard.scss';
import '../scss/header.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');
  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.select', '', 'data-state');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  initTabs();
  initTabs('.tab__links', '.tab__content');
  //initTabs(".horTab", ".variants__item");

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.details__Accordion', '.details__information', 'activeAccordion');

  getFooterModal();

  owlGallery('.variants__slider_items', {
    nav: true,
    navContainer: '.variants__controls',
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
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: true
      }
    }
  });

  numberSlide('right', '.variants__slider', '.variants__number-slide');
  plusSlide('.variants__slider', '.variants__number-slide');
  minusSlide('.variants__slider', '.variants__number-slide');

  owlGallery('.ideas__slider_items', {
    nav: true,
    navContainer: '.ideas__controls',
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
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: true
      }
    }
  });
  numberSlide('right', '.ideas__slider', '.ideas__number-slide');
  plusSlide('.ideas__slider', '.ideas__number-slide');
  minusSlide('.ideas__slider', '.ideas__number-slide');

  owlGallery('.panels__slider_items', {
    nav: true,
    navContainer: '.panels__controls',
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
        items: 2,
        nav: false
      },
      800: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true
      }
    }
  });
  numberSlide('right', '.panels__slider', '.panels__number-slide');
  plusSlide('.panels__slider', '.panels__number-slide');
  minusSlide('.panels__slider', '.panels__number-slide');

  pageUp();
});
