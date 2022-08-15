import * as $ from 'jquery';
import {
  openSelect,
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
import '../scss/projects.scss';

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');

  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  toggleModal(
    '.intro__button',
    '.suggestProject',
    'suggestProject__active',
    '.suggestProject__close'
  );

  toggleModal(
    '.projects__selects_mobile',
    '.filterModal',
    'filterModal__active',
    '.filterModal__close'
  );

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.select', '', 'data-state');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  openSelect();

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  //initTabs(".horTab", ".variants__item");

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.details__Accordion', '.details__information', 'activeAccordion');

  pageUp();

  getFooterModal();
});
