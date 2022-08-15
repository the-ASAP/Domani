import * as $ from 'jquery';
import {
  openSelectMobile,
  initTabs,
  initSelect,
  toggleModal,
  OutsideClick,
  toggleModalCatalog,
  accordion,
  pageUp,
  fillCatalogContent,
  getFooterModal,
  scrollToMap,
  closeBitrixForm
} from '../vendors/js/general';
import '../scss/style.scss';

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');
  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.select', '', 'data-state');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  initTabs();
  initTabs('.tab__links', '.tab__content');
  initTabs('.horTab', '.variants__item');

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  openSelectMobile();
  initSelect('.select__title', '.tab__content');

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();

  getFooterModal();
});
