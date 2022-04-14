import * as $ from 'jquery';
import {
  toggleModal,
  pageUp,
  createYouTubeEmbedLink,
  createYouTubeLink,
  OutsideClick,
  openModalCatalog,
  accordion,
  fillCatalogContent
} from '../vendors/js/general';
import '../scss/company.scss';

$().ready(() => {
  createYouTubeEmbedLink($('.production__button'), $('.production__video'));
  createYouTubeEmbedLink($('.intro__button'), $('.intro__video'));
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
