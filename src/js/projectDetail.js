import * as $ from 'jquery';
import { plusSlide, minusSlide, numberSlide, owlGallery, openSelect, toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"
import '../scss/projectDetail.scss';
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
        ".intro__button",
        ".suggestProject",
        "suggestProject__active",
        ".suggestProject__close"
    );

    OutsideClick(".modal", "modal__active");
    OutsideClick(".select", "", "data-state");
    
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
      owlGallery(".project__slider_items", {
        nav: true,
        navContainer: ".project__controls",
        loop: false,
        rewind: true,
        dots: false,

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
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                nav: true,
                
            },
        },
    });
    numberSlide('right', ".project__slider", ".project__number-slide");
    plusSlide(".project__slider", ".project__number-slide");
    minusSlide(".project__slider", ".project__number-slide");

    owlGallery(".productProject__slider_items", {
      nav: true,
      navContainer: ".productProject__controls",
      loop: false,
      rewind: true,
      dots: false,

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
  numberSlide('right', ".productProject__slider", ".productProject__number-slide");
  plusSlide(".productProject__slider", ".productProject__number-slide");
  minusSlide(".productProject__slider", ".productProject__number-slide");
});