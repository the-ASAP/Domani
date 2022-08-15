import * as $ from 'jquery';
import {
  toggleModal,
  pageUp,
  createYouTubeEmbedLink,
  createYouTubeLink,
  OutsideClick,
  toggleModalCatalog,
  accordion,
  fillCatalogContent,
  getFooterModal,
  validateForm,
  scrollToMap,
  closeBitrixForm
} from '../vendors/js/general';
import '../scss/company.scss';

$().ready(() => {
  createYouTubeEmbedLink($('.production__button'), $('.production__video'));
  createYouTubeEmbedLink($('.intro__button'), $('.intro__video'));

  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');

  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');
  toggleModal(
    '.cooperation__button',
    '.cooperationModal',
    'cooperationModal__active',
    '.cooperationModal__close'
  );

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  validateForm('.modal_submit');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();

  getFooterModal();
});
