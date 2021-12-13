import * as $ from 'jquery';
import { toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"
import '../scss/contacts.scss';
import '../scss/header.scss';
import "../scss/rootStyles/main.scss";
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
    

    fillCatalogContent();

    openModalCatalog();

    accordion(
        ".menuCatalog__accordion",
        ".menuCatalog__information",
        "activeAccordion"
      );
      accordion(
        ".menuCatalog__mainAccordion",
        ".menuCatalog__information",
        "activeAccordion"
      );

});