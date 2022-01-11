import * as $ from 'jquery';
import { plusSlide, minusSlide, numberSlide, owlGallery, initTabs, toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"
import '../scss/fittingCard.scss';
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

    toggleModal(
        ".colorSolution__button_price",
        ".findPrice",
        "findPrice__active",
        ".findPrice__close"
    );
    
    OutsideClick(".modal", "modal__active");
    OutsideClick(".select", "", "data-state");
    OutsideClick('.menuCatalog');
    
    initTabs();
    initTabs(".tab__links", ".tab__content");
    //initTabs(".horTab", ".variants__item");

    fillCatalogContent();

    openModalCatalog();

    accordion(
        ".menuCatalog__Accordion",
        ".menuCatalog__information",
        "activeAccordion"
      );
     
      accordion(
        ".details__Accordion",
        ".details__information",
        "activeAccordion"
      );

    owlGallery(".colorSolution__slider_items", {
        nav: true,
        navContainer: ".colorSolution__controls",
        loop: false,
        rewind: true,
        dots: false,

        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
                nav: false,
            },
            700: {
                items: 1,
                nav: false,
            },
            800: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 3,
                nav: true,
                
            },
        },
    });

    owlGallery(".ideas__slider_items", {
        nav: true,
        navContainer: ".ideas__controls",
        loop: false,
        rewind: true,
        dots: false,

        margin: 11,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
                nav: false,
            },
            700: {
                items: 1,
                nav: false,
            },
            800: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 2,
                nav: true,
                
            },
        },
    });
    numberSlide('right', ".ideas__slider", ".ideas__number-slide");
    plusSlide(".ideas__slider", ".ideas__number-slide");
    minusSlide(".ideas__slider", ".ideas__number-slide");

    owlGallery(".fittings__slider_items", {
        nav: true,
        navContainer: ".fittings__controls",
        loop: false,
        rewind: true,
        dots: false,

        margin: 11,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
                nav: false,
            },
            700: {
                items: 2,
                nav: false,
            },
            800: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 3,
                nav: true,
                
            },
        },
    });
});