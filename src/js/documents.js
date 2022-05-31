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
  fillCatalogContent,
  getFooterModal,
  scrollToMap,
  closeBitrixForm
} from '../vendors/js/general';
import '../scss/documents.scss';

const zoomPictureModal = (triggerClass, modalPictureClass) => {
  $(triggerClass).on('click', function () {
    const srcPicture = $(this).attr('data-content');
    $(modalPictureClass).attr('src', srcPicture);
  });
};

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');

  toggleModal(
    '.document__button',
    '.modalDocument',
    'modalDocument__active',
    '.modalDocument__close'
  );
  toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  scrollToMap();

  zoomPictureModal('.document__button', '.modalDocument__picture');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

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

  getFooterModal();
});
