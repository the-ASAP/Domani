import * as $ from 'jquery';
import '../scss/catalogPanel.scss';
import {
  openSelect,
  toggleModal,
  OutsideClick,
  pageUp,
  toggleModalCatalog,
  accordion,
  fillCatalogContent,
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
  OutsideClick('.modal', 'modal__active');
  OutsideClick('.select', '', 'data-state');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  scrollToMap('.menu__buy');scrollToMap('.aside__city');
  openSelect();

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();

  getFooterModal();
});
