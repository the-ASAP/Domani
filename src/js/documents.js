import * as $ from 'jquery';
import {
  initSelect,
  openSelectMobile,
  initTabs,
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
import '../scss/documents.scss';

const zoomPictureModal = (triggerClass, modalPictureClass) => {
  $(triggerClass).on('click', function () {
    const srcPicture = $(this).attr('data-content');
    $(modalPictureClass).attr('src', srcPicture);
    $(modalPictureClass)
  });
};

const pictureModalImgWidth = () => {
  // const container = document.querySelector('.modalDocument__picture');
  // const containerImg = container.getElementsByTagName('img');
  // console.log(container);
  // console.log(container.children)
  // containerImg.style.width = '100%';
  // containerImg.style.height = '100%';

  // iframeContent.body.innerHTML = iframeContent.body.innerHTML + "<style>img{width: 100%; height: 100%}</style>";

  $(".modalDocument__picture").on("load", () => {
    let iframeHead = $(".modalDocument__picture").contents().find("head");
    let iframeCSS = "<style>img{width: 100%; height: 100%;}</style>";
    $(iframeHead).append(iframeCSS);

  });

  let iframeName = document.querySelector(".modalDocument__picture");
  let iframeContent = iframeName.contentDocument;

  console.log(iframeContent.head)
}

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');

  toggleModal(
    '.document__button',
    '.modalDocument',
    'modalDocument__active',
    '.modalDocument__close'
  );
  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  zoomPictureModal('.document__button', '.modalDocument__picture');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  openSelectMobile();
  initSelect('.select__title', '.tab__content');

  initTabs();
  initTabs('.tab__links', '.tab__content');

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');
  accordion('.menuCatalog__mainAccordion', '.menuCatalog__information', 'activeAccordion');

  pictureModalImgWidth();
  pageUp();

  getFooterModal();
});
