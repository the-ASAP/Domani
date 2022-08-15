import * as $ from 'jquery';
import '../scss/gotovie.scss';
import {
  openSelect,
  toggleModal,
  pageUp,
  OutsideClick,
  toggleModalCatalog,
  accordion,
  fillCatalogContent,
  setEqualHeight,
  getFooterModal,
  scrollToMap,
  closeBitrixForm
} from '../vendors/js/general';

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');

  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');
  toggleModal(
    '.catalog__selects_mobile',
    '.filterModal',
    'filterModal__active',
    '.filterModal__close'
  );

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.select', '', 'data-state');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  openSelect();

  fillCatalogContent();

  setEqualHeight($('.product'));

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();

  getFooterModal();
});
