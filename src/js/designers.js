import * as $ from 'jquery';
import { owlGallery, initTabs, toggleModal, OutsideClick, openModalCatalog, accordion } from "../vendors/js/general"
import '../scss/designers.scss';
import '../scss/header.scss';
import "../scss/rootStyles/main.scss";

const plusSlide = () => {
    $(".owl-next").on("click", function () {
        numberSlide('right');
    });
};
const minusSlide = () => {
    $(".owl-prev").on("click", function () {
        numberSlide('left');
    });
};

function numberSlide(direction) {
    const items = document.querySelectorAll(".owl-item:not(.cloned)");
    const number = document.querySelector(".projects__number-slide");
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

const fillCatalogContent = () => {
    if (localStorage.getItem("content").length) {
        const tabButtons = $(".tab__links");
        const tabs = $(".tab__content");

        tabButtons.removeClass("active");
        tabs.removeClass("active");

        tabs.each(function (i, tab) {
            if (localStorage.getItem("content") === $(tab).attr("id")) {
                $(tab).addClass("active");
            }
        });

        tabButtons.each((i, button) => {
            if (localStorage.getItem("content") === $(button).attr("data-category")) {
                $(button).addClass("active");
            }
        });
    }
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
    initTabs(".horTab", ".variants__item");

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

    owlGallery(".projects__slider_items", {
        nav: true,
        navContainer: ".projects__controls",
        loop: true,
        dots: false,

        margin: 11,
        responsive: {
            0: {
                items: 1.6,
            },
            500: {
                items: 1.6,
                nav: false,
            },
            700: {
                items: 2,
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
    numberSlide('right');
    plusSlide();
    minusSlide();
});