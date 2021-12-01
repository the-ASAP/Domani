import * as $ from 'jquery';
import {  openSelectMobile, initTabs, initSelect, toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"
import '../scss/collection.scss';
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
    OutsideClick(".select", "", "data-state");
    
    initTabs();
    initTabs(".tab__links", ".tab__content");
    initTabs(".horTab", ".variants__item");

   openSelectMobile();
   initSelect(".select__title", ".tab__content");
    
    
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