import * as $ from 'jquery';
import '../scss/news.scss';
import { toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general";

$().ready(() => {
    toggleModal(".map__point", ".modal", "modal__active", ".modal__close");
    toggleModal(
      ".menu__city",
      ".choiceCity",
      "choiceCity__active",
      ".choiceCity__close"
    );
    OutsideClick(".modal", "modal__active");
    OutsideClick('.menuCatalog');
  
    fillCatalogContent();
  
    openModalCatalog();
  
    accordion(
      ".menuCatalog__Accordion",
      ".menuCatalog__information",
      "activeAccordion"
    );
    accordion(
      ".menuCatalog__mainAccordion",
      ".menuCatalog__information",
      "activeAccordion"
    );

  });