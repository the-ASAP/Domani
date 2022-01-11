import * as $ from 'jquery';
import { openSelect, toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"
import '../scss/projects.scss';

$().ready(() => {

    toggleModal(".map__point", ".modal", "modal__active", ".modal__close");
    toggleModal(
        ".menu__city",
        ".choiceCity",
        "choiceCity__active",
        ".choiceCity__close"
    );

    toggleModal(
        ".intro__button",
        ".suggestProject",
        "suggestProject__active",
        ".suggestProject__close"
    );

    toggleModal(
      ".projects__selects_mobile",
      ".filterModal",
      "filterModal__active",
      ".filterModal__close"
  );

    OutsideClick(".modal", "modal__active");
    OutsideClick(".select", "", "data-state");
    OutsideClick('.menuCatalog');
    
    openSelect();

    //initTabs(".horTab", ".variants__item");

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
      accordion(
        ".details__Accordion",
        ".details__information",
        "activeAccordion"
      );

});