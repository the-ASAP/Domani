import * as $ from 'jquery';
import '../scss/news.scss';
import {
  toggleModal,
  OutsideClick,
  toggleModalCatalog,
  accordion,
  pageUp,
  fillCatalogContent,
  getFooterModal,
  scrollToMap,
  openSelect,
  closeBitrixForm
} from '../vendors/js/general';

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');

  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  fillCatalogContent();

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  openSelect();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();

  getFooterModal();
});
