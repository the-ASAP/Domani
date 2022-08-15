import * as $ from 'jquery';
import {
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
import '../scss/contacts.scss';

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');

  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();
  getFooterModal();
});
