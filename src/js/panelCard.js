import * as $ from 'jquery';
import { owlGallery, initTabs, toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"
import '../scss/panelCard.scss';
import '../scss/header.scss';
import "../scss/rootStyles/main.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

const plusSlide = (classSlider, classNumber) => {
    $(".owl-next").on("click", function () {
        numberSlide('right', classSlider, classNumber);
    });
};
const minusSlide = (classSlider, classNumber) => {
    $(".owl-prev").on("click", function () {
        numberSlide('left', classSlider, classNumber);
    });
};

function numberSlide(direction, classSlider, classNumber) {
    const items = document.querySelectorAll(`${classSlider} .owl-item:not(.cloned)`);
    const number = document.querySelector(classNumber);
    let num = items.length;
    let numActive = 1;
    for (var key in Object.keys(items)) {

        if ((items[key].className === "owl-item active") && (direction === 'right')) {

            numActive = Number(key) + 1;
            break;
        }
        if ((items[key].className === "owl-item active") && (direction === 'left')) {
            if (Number(key) === 0) {
                numActive = items.length;
            } else {
                numActive = Number(key);
            }
        }
    }
    let formattedNumActive = numActive.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    let formattedNum = num.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })

    number.innerHTML = `${formattedNumActive}/${formattedNum}`;
};

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
    //initTabs(".horTab", ".variants__item");

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
      accordion(
        ".details__Accordion",
        ".details__information",
        "activeAccordion"
      );

    owlGallery(".variants__slider_items", {
        nav: true,
        navContainer: ".variants__controls",
        loop: true,
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

    numberSlide('right', ".variants__slider", ".variants__number-slide");
    plusSlide(".variants__slider", ".variants__number-slide");
    minusSlide(".variants__slider", ".variants__number-slide");

    owlGallery(".ideas__slider_items", {
        nav: true,
        navContainer: ".ideas__controls",
        loop: true,
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
    numberSlide('right', ".variants__slider", ".ideas__number-slide");
    plusSlide(".ideas__slider", ".ideas__number-slide");
    minusSlide(".ideas__slider", ".ideas__number-slide");

    owlGallery(".panels__slider_items", {
        nav: true,
        navContainer: ".panels__controls",
        loop: true,
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