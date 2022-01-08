import * as $ from 'jquery';
import '../scss/news.scss';
import { toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"

import "../scss/index.scss";
import '../scss/header.scss';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

$().ready(() => {
    toggleModal(".map__point", ".modal", "modal__active", ".modal__close");
    toggleModal(
      ".menu__city",
      ".choiceCity",
      "choiceCity__active",
      ".choiceCity__close"
    );
    OutsideClick(".modal", "modal__active");
    OutsideClick('.menuCatalog')
  
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