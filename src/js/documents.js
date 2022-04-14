import * as $ from 'jquery';
import {
  initSelect,
  openSelectMobile,
  initTabs,
  toggleModal,
  OutsideClick,
  pageUp,
  openModalCatalog,
  accordion,
  fillCatalogContent
} from '../vendors/js/general';
import '../scss/documents.scss';

const zoomPictureModal = (triggerClass, modalPictureClass) => {
  $(triggerClass).on('click', () => {
    const srcPicture = $(triggerClass).attr('data-content');
    $(modalPictureClass).attr('src', srcPicture);
  });
};

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');
  toggleModal('.menu__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');
  toggleModal('.menuCatalog__city_btn', '.choiceCity', 'choiceCity__active', '.choiceCity__close');
  toggleModal(
    '.document__button',
    '.modalDocument',
    'modalDocument__active',
    '.modalDocument__close'
  );
  toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  zoomPictureModal('.document__button', '.modalDocument__picture');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.menuCatalog');
  openSelectMobile();
  initSelect('.select__title', '.tab__content');

  initTabs();
  initTabs('.tab__links', '.tab__content');

  fillCatalogContent();

  openModalCatalog('.menu__openCatalog');
  openModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pageUp();
});
