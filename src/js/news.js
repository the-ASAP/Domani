import * as $ from 'jquery';
import '../scss/news.scss';
import {
  toggleModal,
  OutsideClick,
  openModalCatalog,
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

  toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  fillCatalogContent();

  scrollToMap();

  openSelect();

  openModalCatalog('.menu__openCatalog');
  openModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();

  getFooterModal();
});
