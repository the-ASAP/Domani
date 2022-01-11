import * as $ from 'jquery';
import '../scss/catalog.scss';
import { openSelect, toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"

$().ready(() => {

    toggleModal(".map__point", ".modal", "modal__active", ".modal__close");
    toggleModal(
        ".menu__city",
        ".choiceCity",
        "choiceCity__active",
        ".choiceCity__close"
    );
    toggleModal(
      ".catalog__selects_mobile",
      ".filterModal",
      "filterModal__active",
      ".filterModal__close"
  );
    OutsideClick(".modal", "modal__active");
    OutsideClick(".select", "", "data-state");
    OutsideClick('.menuCatalog');
    
    openSelect();
     
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