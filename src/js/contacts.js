import * as $ from 'jquery';
import {
  toggleModal,
  OutsideClick,
  openModalCatalog,
  accordion,
  pageUp,
  fillCatalogContent
} from '../vendors/js/general';
import '../scss/contacts.scss';

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

  pageUp();
});
