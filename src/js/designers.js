import * as $ from 'jquery';
import {
  plusSlide,
  minusSlide,
  numberSlide,
  owlGallery,
  pageUp,
  initTabs,
  toggleModal,
  OutsideClick,
  openModalCatalog,
  accordion,
  fillCatalogContent,
  getFooterModal,
  validateForm,
  scrollToMap,
  closeBitrixForm
} from '../vendors/js/general';
import '../scss/designers.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');

  // toggleModal(
  //   '.project-site__button',
  //   '.suggestProject',
  //   'suggestProject__active',
  //   '.suggestProject__close'
  // );
  // toggleModal(
  //   '.cooperation__button',
  //   '.cooperationModal',
  //   'cooperationModal__active',
  //   '.cooperationModal__close'
  // );
  toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  scrollToMap();

  validateForm('.modal_submit');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.select', '', 'data-state');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  initTabs();
  initTabs('.tab__links', '.tab__content');
  //initTabs(".horTab", ".variants__item");

  fillCatalogContent();

  openModalCatalog('.menu__openCatalog');
  openModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  getFooterModal();

  owlGallery('.projects__slider_items', {
    nav: true,
    navContainer: '.projects__controls',
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
  numberSlide('right', '.projects__slider', '.projects__number-slide');
  plusSlide('.projects__slider', '.projects__number-slide');
  minusSlide('.projects__slider', '.projects__number-slide');

  pageUp();
});
